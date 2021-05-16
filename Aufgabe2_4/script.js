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
            sessionStorage.setItem("image1", _wahl.bild);
            sessionStorage.setItem("art", _wahl.was);
            location.href = "haare.html";
        }
    }
    function showPossibilities(_wahl) {
        let wrapper = document.getElementById("auswahlBereich");
        for (let i = 0; i < _wahl.length; i++) {
            let div = zusammenbau(_wahl[i], i);
            wrapper.appendChild(div);
        }
    }
    //showPossibilities(wahl.body);
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
        return div;
        function wahlmoeglichkeit(_event) {
            console.log("Wahl", _auswahl);
            sessionStorage.setItem("image1", _auswahl.bild);
            sessionStorage.setItem("art", _auswahl.was);
            location.href = "haare.html";
        }
    }
    function hairDiv(_auswahl) {
        let div = document.createElement("div");
        div.classList.add("teil");
        let image = document.createElement("img");
        image.src = _auswahl.bild;
        div.appendChild(image);
        let p = document.createElement("p");
        p.innerText = _auswahl.was;
        div.appendChild(p);
        let button = document.createElement("button");
        button.innerText = "Wählen";
        if ((document.querySelector("title").getAttribute("id") == "hair")) {
            button.addEventListener("click", auswahlSegel);
            div.appendChild(button);
            function auswahlSegel(_event) {
                console.log(_auswahl.was);
                sessionStorage.setItem("", _auswahl.bild);
                sessionStorage.setItem("", _auswahl.was);
                location.href = "kleidung.html";
            }
        }
        if ((document.querySelector("title").getAttribute("id") == "outfit")) {
            button.addEventListener("click", kleidWahl);
            div.appendChild(button);
            function kleidWahl(_event) {
                console.log("" + _auswahl.was);
                sessionStorage.setItem("", _auswahl.bild);
                sessionStorage.setItem("", _auswahl.was);
                location.href = "extra.html";
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
                let div = hairDiv(_auswahl.hair[i]);
                anzeige.appendChild(div);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "outfit") {
            for (let i = 0; i < _auswahl.outfit.length; i++) {
                let div = hairDiv(_auswahl.outfit[i]);
                anzeige.appendChild(div);
            }
        }
    }
    anzeige(Aufgabe2_4.wahl);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map