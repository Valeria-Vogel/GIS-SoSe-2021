"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    let body1 = document.body;
    let wahl;
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        wahl = await response.json();
        console.log(wahl.body);
        console.log(wahl.hair);
        console.log(wahl.outfit);
    }
    communicate("https://valeria-vogel.github.io/GIS-SoSe-2021/Aufgabe2_5/script/data.JSON");
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
            let button = document.createElement("button");
            button.innerText = "Wählen";
            button.addEventListener("click", wahlmoeglichkeit);
            function wahlmoeglichkeit(_event) {
                location.href = "index.html";
                window.open("index.html", "_self");
            }
        }
    }
    function waehlen() {
        let auswahl = wahl.body;
        if (window.location.href.includes("haare.html"))
            auswahl = wahl.hair;
        if (window.location.href.includes("kleidung.html"))
            auswahl = wahl.outfit;
        return auswahl;
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
    }
    if (window.location.href.includes("kleidung.html")) {
        let aktuelldiv = document.getElementById("schonAusgewaehlt");
        aktuelldiv.classList.add("teil");
        for (let i = 0; i < 2; i++) {
            let img = document.createElement("img");
            img.classList.add("teil");
            img.setAttribute("src", localStorage.getItem(i.toString()));
            //img.setAttribute("src", localStorage.getItem("hair"));
            aktuelldiv.appendChild(img);
        }
        if (window.location.href.includes("ergebnis.html")) {
            let aktuelldiv = document.getElementById("schonAusgewaehlt");
            aktuelldiv.classList.add("teil");
            for (let i = 0; i < 3; i++) {
                let img = document.createElement("img");
                img.classList.add("teil");
                img.setAttribute("src", localStorage.getItem(i.toString()));
                //img.setAttribute("src", localStorage.getItem("hair"));
                // img.setAttribute("src", localStorage.getItem("outfit"));
                aktuelldiv.appendChild(img);
            }
        }
        aktuell();
        async function dataMes(_url) {
            let locArray = JSON.parse(localStorage.getItem("body"));
            let query = new URLSearchParams(locArray);
            _url = _url + "?" + query.toString();
            await fetch(_url);
            let response = await fetch(_url);
            let serverResponse = await response.json();
            console.log("Response", response);
            let serverMessage = document.createElement("p");
            serverMessage.setAttribute("style", "position: absoulute; margin: 0; top: 0");
            if (serverResponse.error == undefined) {
                serverMessage.innerText = "Servernachricht: " + serverResponse.message;
            }
            else {
                serverMessage.innerText = "Error: " + serverResponse.error;
            }
            body1.appendChild(serverMessage);
        }
        dataMes("https://gis-communication.herokuapp.com");
        function auswaehlen() {
            let gewaehltes = waehlen();
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
    }
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script.js.map