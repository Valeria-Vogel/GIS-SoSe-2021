namespace Aufgabe2_4 {
    let wahl: Darstellung;
    createObj();
    function createObj(): void {
        wahl = JSON.parse(auswahlJSON);
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
            localStorage.setItem("was", _auswahl.was);
            //if (localStorage == _auswahl. ) {
            location.href = "haare.html";
            //}
            console.log("click", localStorage);
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
                console.log(_auswahl.was);
                localStorage.setItem("was", _auswahl.was);
                location.href = "kleidung.html";

                console.log("click", localStorage);

            }
        }
        if ((document.querySelector("title").getAttribute("id") == "outfit")) {
            button.addEventListener("click", kleidWahl);
            div.appendChild(button);
            function kleidWahl(_event: Event): void {
                console.log("" + _auswahl.was);
                localStorage.setItem("", _auswahl.was);
                location.href = "extra.html";

                console.log("click ", localStorage);
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
}

