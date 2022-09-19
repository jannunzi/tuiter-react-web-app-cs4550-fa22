javascript:(function () {
    class helper {
        constructor() {
            const speedGraderIframe = $("#speedgrader_iframe");
            const speedGraderContent = $(speedGraderIframe.contents());
            const gitAndNetlifyAnchors = speedGraderContent.find('a');
            for(let i=0; i<gitAndNetlifyAnchors.length; i++) {
                const href = $(gitAndNetlifyAnchors[i]).attr('href');
                if (href && href.indexOf('github') >= 0) {
                    console.log(href);
                    window.open(href, '_new1');
                }
                if (href && href.indexOf('.app') >= 0) {
                    console.log(href);
                    window.open(href, '_new2');
                }
            }
        }
    }
    window.sns_helper = new helper;
})();