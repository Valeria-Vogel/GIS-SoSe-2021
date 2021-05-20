"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let personAuswahl = {};
    let storedSelection = localStorage.getItem("selection");
    if (storedSelection) {
        personAuswahl = JSON.parse(storedSelection);
    }
    let wrapper = document.getElementById("resultDisplay");
    if (personAuswahl.body_g) {
        wrapper.appendChild(createImage(personAuswahl.body_g.bild));
    }
    else {
        wrapper.appendChild(createImage("./img/sex.png"));
    }
    if (personAuswahl.hair) {
        wrapper.appendChild(createImage(personAuswahl.hair.bild));
    }
    else {
        wrapper.appendChild(createImage("./img/woman-hair.png"));
    }
    if (personAuswahl.outfit) {
        wrapper.appendChild(createImage(personAuswahl.outfit.bild));
    }
    else {
        wrapper.appendChild(createImage("./img/male-colthing.png"));
    }
    function createImage(_src) {
        let img = document.createElement("img");
        img.src = _src;
        return img;
    }
    document.getElementById("tryagain").addEventListener("click", restart);
    function restart() {
        localStorage.clear();
        window.location.assign("./");
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=result.js.map