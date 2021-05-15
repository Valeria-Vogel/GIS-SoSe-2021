"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
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
        button.addEventListener("click", wahlmoeglichkeit2);
        button.dataset.index = _index.toString();
        div.appendChild(button);
        return div;
        function wahlmoeglichkeit(_event) {
            console.log("Wahl", _wahl);
        }
    }
    function wahlmoeglichkeit2(_e) {
        let target = _e.currentTarget;
        let index = Number(target.dataset.index);
        console.log("äußere Funktion", Aufgabe2_3.wahl.body[index]);
    }
    function showPossibilities(_wahl) {
        let wrapper = document.getElementById("selectionWrapper");
        for (let i = 0; i < _wahl.length; i++) {
            let div = zusammenbau(_wahl[i], i);
            wrapper.appendChild(div);
        }
    }
    showPossibilities(Aufgabe2_3.wahl.body);
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map