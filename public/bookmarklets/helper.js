javascript:(function () {
    class helper {
        constructor() {
            $("#addSubTaskWindow").remove();
            this.color_pending = "rgb(255 252 168 / 32%)", this.color_started = "rgb(168 177 255 / 32%)", this.color_finished = "rgb(175 255 178 / 32%)", this.color_error = "rgb(255 53 87 / 32%)", this.WAIT_FOR_ADDED = 5e3, this.WAIT_FOR_MODAL = 1e3;
            const e = $("head > meta[name='ajs-issue-key']").attr("content"),
                s = $("head > meta[name='ajs-remote-user']").attr("content"),
                i = `\n<div id="addSubTaskWindow" style="position: absolute; top: 0; width:400px; height: 100vh; display:flex; justify-content: center; align-items:center; z-index: 3000;">\n  <div style="border: 1px solid black; width:90%; height: 96%; background-color: white; padding: 10px 10px 10px 10px; display: flex; flex-direction: column; overflow: scroll; position: relative;">\n    <div style="font-size: 18px;margin-bottom: 5px;">JIRA CR subtasks helper</div> \n    <div style="font-size: 13px;margin-bottom: 8px;">Enter the CR informations and select which persons you want to do your code-review and subtasks will be created for you</div>\n    <button style="position: absolute;right: 0;top: 0;margin: 4px;border-radius: 100%;border: 1px solid black;background-color: white; cursor: pointer;" onclick="$('#addSubTaskWindow').remove();">X</button>\n    <div style="margin-top: 5px;">\n      <div style="font-weight: bold;">Task:</div>\n      <input style="width: 98%;" value="${e}" id="sns_task" onkeyup="window.sns_helper.refreshPreview()" />\n    </div>\n    <div style="margin-top: 5px;">\n      <div style="font-weight: bold;">Round:</div>\n      <input style="width: 98%;" value="1" id="sns_taskRound" onkeyup="window.sns_helper.refreshPreview()" />\n    </div>\n    <div style="margin-top: 5px;">\n      <div style="font-weight: bold;">Owner:</div>\n      <select id="sns_personSelect" onChange="window.sns_helper.refreshPreview()">\n      </select>\n    </div>\n    <div style="margin-top: 5px;">\n      <div style="font-weight: bold;">Description: <span id="sns_description_err" style="visibility: hidden;font-weight: bold;color: red;font-size: 12px;">Description shouldn't be empty</span></div>\n      <textarea style="width: 98%;" id="sns_description" onkeyup="window.sns_helper.refreshPreview()" onChange="window.sns_helper.refreshPreview()"></textarea>\n    </div>\n    <div style="margin-top: 5px;">\n      <div style="font-weight: bold;">Assigned people:</div>\n      <div id="sns_peopleSubtask"></div>\n    </div>\n    <hr/>\n    <div style="margin-top: 15px; flex-grow: 1; display: flex; flex-direction: column;">\n      <div style="flex-grow: 1; margin-bottom: 15px;">\n        The following sub-tasks will be created:\n        <div id="sns_tasksPreview"></div>\n      </div>\n      <button id="sns_goButton" onClick="window.sns_helper.go()">GO</button>\n    </div>\n    \x3c!--<div>\n      <button onClick="window.sns_helper.openModal()">Open Modal</button>\n      <button onClick="window.sns_helper.closeModal()">Close Modal</button>\n      <button onClick="window.sns_helper.test()">TEST FILL</button>\n    </div>--\x3e\n  </div>\n</div>\n`;
            $("body").append($(i));
            const n = $("#sns_peopleSubtask"), o = $("#sns_personSelect");
            [{name: "George", email: "george.morosac@sonos.com"}, {
                name: "Jose",
                email: "jose.annunziato@sonos.com"
            }, {name: "Maya", email: "maya.nigrosh@sonos.com"}, {
                name: "Radu",
                email: "radu.popescu@sonos.com"
            }, {name: "Richard", email: "richard.isaac@sonos.com"}, {
                name: "Ricky",
                email: "ruizhi.gao@sonos.com"
            }, {name: "Saad", email: "saad.haq@sonos.com"}].forEach(({name: e, email: i}) => {
                n.append($(`\n    <div>\n    <input type="checkbox" name="people[]" value="${i}" id="sns_ck_${e}" onChange="window.sns_helper.refreshPreview()">\n    <label for="sns_ck_${e}">${e}</label>\n    </div>\n    `)), o.append($(`\n      <option value="${i}" ${s == i ? "selected" : ""}>${e}</option>\n      `))
            })
        }

        buildTasksJson() {
            const e = $("#sns_taskRound").val(), s = $("#sns_task").val(), i = $("#sns_description").val(),
                n = $("#sns_personSelect").val(), o = [];
            $("#sns_peopleSubtask input[name='people[]']").each((e, s) => {
                s.checked && o.push(s.value)
            });
            const t = [];
            return o.forEach((l, d) => {
                t.push({
                    index: d,
                    summary: `Round ${e} CR for ${s} (${d + 1}/${o.length})`,
                    description: i,
                    assigned: l,
                    person: n
                })
            }), t
        }

        refreshPreview() {
            const e = this.buildTasksJson(), s = $("#sns_tasksPreview");
            s.empty(), e.forEach(e => {
                s.append($(`<div style="margin-top:5px; padding: 3px; border: 1px solid gray; position: relative;">\n        <div style="font-weight: bold;">${e.summary}</div>\n        <div style="font-style: italic; margin-left: 5px; border-left: 1px solid gray; padding-left: 5px;">${e.description}</div>\n        <div>Assigned: ${e.assigned}</div>\n        <div>Owner: ${e.person}</div>\n        <div class="sns_spinner" style="display: none!important; position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: rgb(255 255 255 / 61%); top: 0; left: 0;"><img src="https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif"/></div>\n      </div>`))
            })
        }

        setTaskColor(e, s, i = !0) {
            $(`#sns_tasksPreview > div:nth-child(${e + 1})`).css("backgroundColor", s), $(`#sns_tasksPreview > div:nth-child(${e + 1}) .sns_spinner`).css("display", i ? "flex" : "none")
        }

        hasElement(e) {
            return $(e).length > 0
        }

        openModal() {
            this.hasElement("#jira-dialog2__heading") || $("#create-subtask > a").click()
        }

        closeModal() {
            $("#create-subtask-dialog").remove(), $(".aui-blanket").remove()
        }

        go() {
            let e = this.buildTasksJson();
            const s = $("#sns_description").val();
            if ($("#sns_description_err").css("visibility", "hidden"), $("#sns_description").css("border-color", "inherit"), "" == s) return $("#sns_description_err").css("visibility", "visible"), void $("#sns_description").css("border-color", "red");
            $("#sns_goButton").attr("disabled", !0), e.forEach(({index: e}) => {
                this.setTaskColor(e, this.color_pending)
            }), e.reduce(this.sequencePromises, Promise.resolve()).then(() => {
                $("#sns_goButton").attr("disabled", !1), location.reload()
            })
        }

        addTask({index: e, summary: s, description: i, assigned: n, person: o}) {
            return new Promise(t => {
                this.setTaskColor(e, this.color_started), this.openModal(), setTimeout(() => {
                    const l = {
                        pid: "15409",
                        issuetype: "5",
                        parentIssueId: $('input[name="parentIssueId"]').val(),
                        atl_token: $('input[name="atl_token"]').val(),
                        formToken: $('input[name="formToken"]').val(),
                        priority: "3",
                        summary: s,
                        assignee: n,
                        customfield_10408: o,
                        customfield_14201: o,
                        description: i,
                        customfield_11903: null,
                        customfield_14203: null,
                        duedate: null,
                        customfield_12600: "-1",
                        customfield_15813: "-1",
                        issuelinks: "issuelinks",
                        "issuelinks-linktype": "blocks",
                        customfield_10503: "-1",
                        customfield_12900: null,
                        customfield_12901: null,
                        customfield_14200: "-1",
                        customfield_14105: "-1",
                        customfield_13801: "12761",
                        customfield_15512: null,
                        "dnd-dropzone": null,
                        customfield_10203: null,
                        customfield_10200: null,
                        customfield_10305: null,
                        fieldsToRetain: ["project", "issuetype", "priority", "components", "fixVersions", "assignee", "customfield_10408", "customfield_14201", "customfield_11903", "customfield_14203", "duedate", "customfield_12600", "customfield_15813", "labels", "issuelinks", "customfield_11000", "customfield_10100", "customfield_12700", "customfield_10503", "customfield_12900", "customfield_12901", "customfield_14200", "customfield_14105", "customfield_13801", "customfield_15512", "customfield_10203", "customfield_10200", "customfield_10305"]
                    };
                    $.ajax({
                        type: "POST", data: l, url: "/secure/QuickCreateIssue.jspa?decorator=none", success: s => {
                            this.setTaskColor(e, this.color_finished, !1), this.closeModal(), t()
                        }, error: s => {
                            this.setTaskColor(e, this.color_error, !1), this.closeModal(), t()
                        }
                    })
                }, this.WAIT_FOR_MODAL)
            })
        }

        sequencePromises(e, s) {
            return new Promise(i => {
                i(e.then(e => window.sns_helper.addTask(s)))
            })
        }
    }

    window.sns_helper = new helper;
})();