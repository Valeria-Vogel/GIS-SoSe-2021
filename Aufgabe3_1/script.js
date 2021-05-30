"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    document.getElementById("Button").addEventListener("click", handelButtonClick);
    function handelButtonClick() {
        response("https://gissose2021heroku.herokuapp.com");
        console.log("Es läuft!");
    }
    async function response(_url) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let serverResponse = await fetch(_url);
        let responseString = await serverResponse.text();
        sessionStorage.setItem("answer", responseString);
    }
    console.log(sessionStorage.getItem("answer"));
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map