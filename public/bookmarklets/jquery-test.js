javascript:(function () {
    function init() {
        alert('hello from jquery');
    }
    class jqueryTest {
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
    window.jquery_test = new jqueryTest;
})();