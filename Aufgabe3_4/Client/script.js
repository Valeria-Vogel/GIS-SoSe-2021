"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let btn = document.getElementById("submit");
    btn.addEventListener("click", insert);
    let btn2 = document.getElementById("submit");
    btn2.addEventListener("click", insert);
    //let serverURL: string = "http://localhost:8100";
    let url = "https://gissose2021heroku.herokuapp.com";
    let type;
    async function insert(_e) {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let response = await fetch(url += "?" + query.toString());
        let responseText = await response.text();
        console.log(await response.json());
        console.log(responseText);
        /*if (type == "/send") {
            let responseJSON: JSON = JSON.parse(responseText);
            console.log(responseJSON);
        }*/
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map