"use strict";
var aufgabe2_3;
(function (aufgabe2_3) {
    let body = document.body;
    function rechteck() {
        for (let i = 0; i < 1; i++) {
            let rechteck = document.createElement("div");
            rechteck.style.height = (Math.random() * 300).toString() + "px";
            rechteck.style.width = (Math.random() * 300).toString() + "px";
            rechteck.style.backgroundColor = "#186";
            rechteck.style.margin = (Math.random() * 300).toString() + "px";
            rechteck.classList.add("rect");
            body.appendChild(rechteck);
            body = rechteck;
        }
        for (let i = 0; i < 1; i++) {
            let rechteck = document.createElement("div");
            rechteck.style.height = (Math.random() * 300).toString() + "px";
            rechteck.style.width = (Math.random() * 300).toString() + "px";
            rechteck.style.backgroundColor = "#014";
            rechteck.style.margin = (Math.random() * 200).toString() + "px";
            rechteck.classList.add("rect");
            body.appendChild(rechteck);
            body = rechteck;
        }
        for (let i = 0; i < 1; i++) {
            let rechteck = document.createElement("div");
            rechteck.style.height = (Math.random() * 300).toString() + "px";
            rechteck.style.width = (Math.random() * 300).toString() + "px";
            rechteck.style.backgroundColor = "#177";
            rechteck.style.margin = (Math.random() * 250).toString() + "px";
            rechteck.classList.add("rect");
            body.appendChild(rechteck);
            body = rechteck;
        }
        for (let i = 0; i < 1; i++) {
            let rechteck = document.createElement("div");
            rechteck.style.height = (Math.random() * 300).toString() + "px";
            rechteck.style.width = (Math.random() * 300).toString() + "px";
            rechteck.style.backgroundColor = "red";
            rechteck.style.margin = (Math.random() * 100).toString() + "px";
            rechteck.classList.add("rect");
            body.appendChild(rechteck);
            body = rechteck;
        }
        for (let i = 0; i < 1; i++) {
            let rechteck = document.createElement("div");
            rechteck.style.height = (Math.random() * 300).toString() + "px";
            rechteck.style.width = (Math.random() * 300).toString() + "px";
            rechteck.style.backgroundColor = "lightgreen";
            rechteck.style.margin = (Math.random() * 350).toString() + "px";
            rechteck.classList.add("rect");
            body.appendChild(rechteck);
            body = rechteck;
        }
        for (let i = 0; i < 1; i++) {
            let rechteck = document.createElement("div");
            rechteck.style.height = (Math.random() * 300).toString() + "px";
            rechteck.style.width = (Math.random() * 300).toString() + "px";
            rechteck.style.backgroundColor = "yellow";
            rechteck.style.margin = (Math.random() * 400).toString() + "px";
            rechteck.classList.add("rect");
            body.appendChild(rechteck);
            body = rechteck;
        }
    }
    function ruecksetzen() {
        body.reset();
    }
    let plusButton = document.createElement("button");
    body.appendChild(plusButton);
    plusButton.innerHTML = "Rechteck hinzufügen";
    plusButton.addEventListener("click", rechteck);
    let zuruecksetzen = document.createElement("button");
    body.appendChild(zuruecksetzen);
    zuruecksetzen.innerHTML = "Seite Rücksetzen";
    zuruecksetzen.addEventListener("click", ruecksetzen);
})(aufgabe2_3 || (aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map