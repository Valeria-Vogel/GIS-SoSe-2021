"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    /* let einePerson: Darstellung = konvertieren();
 
     function konvertieren(): Darstellung {
         let auswahl: Darstellung = JSON.parse(auswahlJSON);
         return auswahl;
     }*/
    function zusammenbau(_wahl, _index) {
        let div = document.createElement("div");
        div.classList.add("teil");
        let image = document.createElement("img");
        image.src = _wahl.bild;
        div.appendChild(image);
        let span = document.createElement("span");
        span.innerText = _wahl.was;
        div.appendChild(span);
        let button = document.createElement("button");
        button.innerText = "Wählen";
        button.addEventListener("click", wahlmoeglichkeit);
        button.dataset.index = _index.toString();
        div.appendChild(button);
        return div;
        function wahlmoeglichkeit(_event) {
            console.log("Wahl", _wahl);
            sessionStorage.setItem("body", _wahl.bild);
            sessionStorage.setItem("geschlecht", _wahl.was);
            location.href = "Haare.html";
        }
    }
    function showPossibilities(_wahl) {
        let wrapper = document.getElementById("auswahlBereich");
        for (let i = 0; i < _wahl.length; i++) {
            let div = zusammenbau(_wahl[i], i);
            wrapper.appendChild(div);
        }
    }
    showPossibilities(Aufgabe2_4.wahl.body);
    showPossibilities(Aufgabe2_4.wahl.hair);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map