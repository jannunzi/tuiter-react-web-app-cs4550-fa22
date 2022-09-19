javascript:(function () {
    const ui = `
        <div style="padding: 10px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; background-color: white; z-index: 10000">
            <h1>Debug Frames</h1>
            IP: <input id="sns-ip" value="10.96.1.3"/>
            <button id="sns-connect">Connect</button>
            <label><input id="1" class="sns-toggle" type="checkbox"/>Admin</label>
            <label><input id="2" class="sns-toggle" type="checkbox"/>Configurator</label>
            <label><input id="3" class="sns-toggle" type="checkbox"/>Configurator</label>
            <iframe id="sns-f1" width="100%" height="25%" src="http://10.96.1.3"></iframe>
            <iframe id="sns-f2" width="100%" height="25%" src="http://10.96.1.3:8008"></iframe>
            <iframe id="sns-f3" width="100%" height="25%" src="http://10.96.1.3:6006"></iframe>
        </div>
    `;
    const ports = [
        80, 8008, 6006
    ];
    function connect() {
        const ip = $('#sns-ip').val();
        ports.forEach((port, ndx) => {
            $(`#sns-f${ndx}`).attr('srn', `http://${ip}:${ports[ndx]}`);
        });
    }
    function toggle() {
        $('#sns-f1, #sns-f2, #sns-f3').hide();

    }
    function init() {
        $('body').append(ui);
        $('#sns-connect').click(connect);
        $('.sns-toggle').click(toggle);
    }
    class debugFrames {
        constructor() {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://code.jquery.com/jquery-3.6.1.min.js';
            script.crossorigin = "anonymous";
            document.body.appendChild(script);
            console.log($);
            $(init);
        }
    }
    window.debugFrames = new debugFrames;
})();