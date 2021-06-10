"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    //let url: string = "http://localhost:8100/";
    //let url: string = "https://gissose2021heroku.herokuapp.com/";
    let url = "";
    let type = "";
    let btn = document.getElementById("submit");
    let htmlSubmit = document.getElementById("htmlsubmit");
    let jsonSubmit = document.getElementById("jsonsubmit");
    let responseDIV = document.getElementById("responseDIV");
    btn.addEventListener("click", betaetigen);
    jsonSubmit.addEventListener("click", function () {
        url = "index.json";
        type = "/json";
        betaetigen();
    });
    htmlSubmit.addEventListener("click", function () {
        url = "index.html";
        type = "/html";
        betaetigen();
    });
    async function betaetigen() {
        let formData = new FormData(document.forms[0]);
        //tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let response = await fetch(url += "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
        let jsonString;
        if (type == "/json") {
            let responseJSON = JSON.parse(jsonString);
            console.log(responseJSON);
        }
        else if (type == "/html") {
            responseDIV.innerHTML = "";
            let getText = document.createRange().createContextualFragment(responseText);
            responseDIV.appendChild(getText);
        }
        url = "https://gissose2021heroku.herokuapp.com/";
        //url = "http://localhost:8100/";
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map