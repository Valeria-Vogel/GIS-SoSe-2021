"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let wahl;
    createObj();
    function createObj() {
        wahl = JSON.parse(Aufgabe2_4.auswahlJSON);
    }
    /* let personAuswahl: Selection = {};
     let storedSelection: string = localStorage.getItem("personAuswahl");
     if (storedSelection) {
         personAuswahl = JSON.parse(storedSelection);
     }
 
     function bodyDiv(_auswahl: Beschreibung): HTMLDivElement {
 
         let div: HTMLDivElement = document.createElement("div");
         div.classList.add("teil");
 
         let image: HTMLImageElement = document.createElement("img");
         image.src = _auswahl.bild;
         div.appendChild(image);
 
         let span: HTMLSpanElement = document.createElement("span");
         span.innerText = _auswahl.was;
         div.appendChild(span);
 
 
         let button: HTMLButtonElement = document.createElement("button");
         button.innerText = "Wählen";
         button.addEventListener("click", wahlmoeglichkeit);
 
         div.appendChild(button);
 
         return div;
 
 
         function wahlmoeglichkeit(_event: Event): void {
 
             // localStorage.setItem("bild", _auswahl.bild);
             location.href = "haare.html";
 
             console.log(localStorage);
         }
     }
     function hairDiv(_auswahl: Beschreibung): HTMLDivElement {
         let div: HTMLDivElement = document.createElement("div");
         div.classList.add("teil");
 
         let image: HTMLImageElement = document.createElement("img");
         image.src = _auswahl.bild;
         div.appendChild(image);
 
         let span: HTMLSpanElement = document.createElement("span");
         span.innerText = _auswahl.was;
         div.appendChild(span);
 
         let button: HTMLButtonElement = document.createElement("button");
         button.innerText = "Wählen";
 
         if ((document.querySelector("title").getAttribute("id") == "hair")) {
             button.addEventListener("click", haarWahl);
             div.appendChild(button);
             function haarWahl(_event: Event): void {
 
                 //  localStorage.setItem("bild", _auswahl.bild);
 
                 location.href = "kleidung.html";
 
 
 
                 console.log(localStorage);
 
             }
         }
         if ((document.querySelector("title").getAttribute("id") == "outfit")) {
             button.addEventListener("click", kleidWahl);
             div.appendChild(button);
             function kleidWahl(_event: Event): void {
 
                 // localStorage.setItem("bild", _auswahl.bild);
                 location.href = "ergebnis.html";
 
                 console.log(localStorage);
             }
         }
 
         return div;
     }
     function anzeige(_auswahl: Darstellung): void {
         let anzeige: HTMLDivElement = <HTMLDivElement>document.getElementById("auswahlBereich");
         if (document.querySelector("title").getAttribute("id") == "body") {
             for (let i: number = 0; i < _auswahl.body.length; i++) {
                 let div: HTMLDivElement = bodyDiv(_auswahl.body[i]);
                 anzeige.appendChild(div);
             }
         }
         else if (document.querySelector("title").getAttribute("id") == "hair") {
             for (let i: number = 0; i < _auswahl.hair.length; i++) {
                 let div: HTMLDivElement = hairDiv(_auswahl.hair[i]);
                 anzeige.appendChild(div);
             }
         }
         else if (document.querySelector("title").getAttribute("id") == "outfit") {
             for (let i: number = 0; i < _auswahl.outfit.length; i++) {
                 let div: HTMLDivElement = hairDiv(_auswahl.outfit[i]);
                 anzeige.appendChild(div);
             }
         }
     }
     anzeige(wahl);
 
     let button: HTMLButtonElement = document.createElement("button");
     button.innerText = "Nochmal";
     button.addEventListener("click", restart);
 
     function restart(): void {
         localStorage.clear();
         location.href = "./index.html";
     }
     
     
     */
    let previousElement = document.getElementById("auswahlBereich");
    let h4 = document.createElement("h4");
    h4.style.margin = "10px";
    document.body.appendChild(h4);
    function openNextSite() {
        if (window.location.href.includes("index.html")) {
            window.open("haare.html", "_self");
        }
        if (window.location.href.includes("haare.html")) {
            window.open("kleidung.html", "_self");
        }
        if (window.location.href.includes("kleidung.html")) {
            window.open("ergebnis.html", "_self");
        }
        if (window.location.href.includes("ergebnis.html")) {
            window.open("index.html", "_self");
        }
    }
    function waehlen() {
        let art = wahl.body;
        if (window.location.href.includes("haare.html"))
            art = wahl.hair;
        if (window.location.href.includes("kleidung.html"))
            art = wahl.outfit;
        return art;
    }
    function speichern(_bild) {
        if (window.location.href.includes("index.html")) {
            localStorage.setItem("body", _bild);
        }
        if (window.location.href.includes("haare.html")) {
            localStorage.setItem("hair", _bild);
        }
        if (window.location.href.includes("kleidung.html")) {
            localStorage.setItem("outfit", _bild);
        }
    }
    function aktuell() {
        if (window.location.href.includes("haare.html")) {
            let aktuelldiv = document.getElementById("schonAusgewaehlt");
            aktuelldiv.classList.add("teil");
            let img = document.createElement("img");
            img.classList.add("teil");
            img.setAttribute("src", localStorage.getItem("body"));
            aktuelldiv.appendChild(img);
        }
        if (window.location.href.includes("kleidung.html")) {
            let aktuelldiv = document.getElementById("schonAusgewaehlt");
            aktuelldiv.classList.add("teil");
            let img = document.createElement("img");
            img.classList.add("teil");
            img.setAttribute("src", localStorage.getItem("body"));
            img.setAttribute("src", localStorage.getItem("hair"));
            aktuelldiv.appendChild(img);
        }
        if (window.location.href.includes("ergebnis.html")) {
            let aktuelldiv = document.getElementById("schonAusgewaehlt");
            aktuelldiv.classList.add("teil");
            let img = document.createElement("img");
            img.classList.add("teil");
            img.setAttribute("src", localStorage.getItem("body"));
            img.setAttribute("src", localStorage.getItem("hair"));
            img.setAttribute("src", localStorage.getItem("outfit"));
            aktuelldiv.appendChild(img);
        }
    }
    aktuell();
    function auswaehlen() {
        const gewaehltes = waehlen();
        for (let i = 0; i < gewaehltes.length; i++) {
            let img = document.createElement("img");
            img.classList.add("teil");
            img.setAttribute("src", gewaehltes[i].bild);
            img.addEventListener("click", function () { speichern(gewaehltes[i].bild); });
            img.addEventListener("click", openNextSite);
            img.id = gewaehltes[i].bildId;
            previousElement.appendChild(img);
        }
    }
    auswaehlen();
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map