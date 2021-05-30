"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    let btn = document.getElementById("Button");
    btn.addEventListener("click", click);
    async function click() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021heroku.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        showResponse(responseText);
        console.log(responseText);
    }
    function showResponse(response) {
        let responseDiv = document.getElementById("response");
        responseDiv.innerHTML = "Serverantwort: " + response;
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map