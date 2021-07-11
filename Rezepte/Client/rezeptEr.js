"use strict";
var Prüfung;
(function (Prüfung) {
    let fertig = document.getElementById("fertig");
    fertig.addEventListener("click", function () {
        betaetigen();
        console.log("Rezept Erstellt");
    });
    async function betaetigen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021heroku.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
    }
    document.getElementById("plusZutat").addEventListener("click", Zutat);
    function Zutat() {
        let plusZutaten = document.createElement("input");
        let gegeben = document.getElementById("zusatzZutat");
        gegeben.appendChild(plusZutaten);
    }
})(Prüfung || (Prüfung = {}));
//# sourceMappingURL=rezeptEr.js.map