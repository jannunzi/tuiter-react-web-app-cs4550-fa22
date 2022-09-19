javascript:(function () {
    const ui = `
    <div id="jga-root" style="position: absolute; top: 0px; left: 0px; z-index: 10000; background-color: white">
       <h2>Hello</h2>
       <ul id="jga-anchors"></ul>
    </div>
    `;
    class helper {
        constructor() {
            // $('body').append(ui);
            const allAnchors = $('a');
            // console.log(allAnchors);
            // allAnchors.forEach((a) => {
            //     const href = $(a).attr('href')
            //     const jgaAnchors = $('#jga-anchors');
            //     jgaAnchors.append(`<li>${href}</li>`)
            // });
        }
    }
    window.sns_helper = new helper;
})();