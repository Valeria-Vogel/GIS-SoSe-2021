"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let wahl;
    createObj();
    function createObj() {
        wahl = JSON.parse(Aufgabe2_4.auswahlJSON);
    }
    function bodyDiv(_auswahl) {
        let div = document.createElement("div");
        div.classList.add("teil");
        let image = document.createElement("img");
        image.src = _auswahl.bild;
        div.appendChild(image);
        let span = document.createElement("span");
        span.innerText = _auswahl.was;
        div.appendChild(span);
        let button = document.createElement("button");
        button.innerText = "Wählen";
        button.addEventListener("click", wahlmoeglichkeit);
        div.appendChild(button);
        function wahlmoeglichkeit(_event) {
            localStorage.setItem("bild", _auswahl.bild);
            localStorage.setItem("was", _auswahl.was);
            //if (localStorage == _auswahl. ) {
            location.href = "haare.html";
            //}
            console.log(localStorage);
        }
        if ((document.querySelector("title").getAttribute("id") == "hair")) {
            button.addEventListener("click", haarWahl);
            div.appendChild(button);
            function haarWahl(_event) {
                console.log(_auswahl.was);
                localStorage.setItem("bild", _auswahl.bild);
                localStorage.setItem("was", _auswahl.was);
                location.href = "kleidung.html";
                console.log(localStorage);
            }
        }
        if ((document.querySelector("title").getAttribute("id") == "outfit")) {
            button.addEventListener("click", kleidWahl);
            div.appendChild(button);
            function kleidWahl(_event) {
                localStorage.setItem("bild", _auswahl.bild);
                localStorage.setItem("was", _auswahl.was);
                location.href = "extra.html";
                console.log(localStorage);
            }
        }
        return div;
    }
    function anzeige(_auswahl) {
        let anzeige = document.getElementById("auswahlBereich");
        if (document.querySelector("title").getAttribute("id") == "body") {
            for (let i = 0; i < _auswahl.body.length; i++) {
                let div = bodyDiv(_auswahl.body[i]);
                anzeige.appendChild(div);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "hair") {
            for (let i = 0; i < _auswahl.hair.length; i++) {
                let div = bodyDiv(_auswahl.hair[i]);
                anzeige.appendChild(div);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "outfit") {
            for (let i = 0; i < _auswahl.outfit.length; i++) {
                let div = bodyDiv(_auswahl.outfit[i]);
                anzeige.appendChild(div);
            }
        }
    }
    anzeige(wahl);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map