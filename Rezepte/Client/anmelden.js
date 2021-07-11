"use strict";
var Prüfung;
(function (Prüfung) {
    let anmelden = document.getElementById("submit");
    anmelden.addEventListener("click", function () {
        betaetigen();
        console.log("Regestriert");
    });
    async function betaetigen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021heroku.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
    }
})(Prüfung || (Prüfung = {}));
//# sourceMappingURL=anmelden.js.map