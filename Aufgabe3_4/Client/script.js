"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let btn = document.getElementById("submit");
    btn.addEventListener("click", insert);
    let btn2 = document.getElementById("submit");
    btn2.addEventListener("click", findAll);
    //let serverURL: string = "http://localhost:8100";
    let url = "https://gissose2021heroku.herokuapp.com";
    async function insert(_e) {
        let fd = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(fd);
        let response = await fetch(url + "/insert?" + query);
        console.log(await response.json());
    }
    let type;
    async function findAll(_e) {
        let out = document.getElementById("output");
        out.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        url += type;
        //tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let response = await fetch(url += "?" + query.toString());
        let responseText = await response.text();
        alert(responseText); //kann auskommentiert werden
        if (type == "/json") {
            let responseJSON = JSON.parse(responseText);
            console.log(responseJSON);
        }
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map