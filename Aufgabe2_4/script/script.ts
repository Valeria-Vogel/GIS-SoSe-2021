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
                location.href = "ergebnis.html";

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
    let personAuswahl: Selection = {};
    let storedSelection: string = localStorage.getItem("selection");
    if (storedSelection) {
        personAuswahl = JSON.parse(storedSelection);
    }


    let currentParts: Beschreibung[] = [];
    let currentPart: string = "";
    switch (document.title) {
        case "Geschlecht":
            currentPart = "Body";
            currentParts = wahl.body;
            break;
        case "Haare":
            currentPart = "Hair";
            currentParts = wahl.hair;
            break;
        case "Kleidung":
            currentPart = "Outfit";
            currentParts = wahl.outfit;
            break;
        default:
            break;
    }
    showPossibilities(currentParts);
    function bodyDiv1(_auswahl: Beschreibung): HTMLDivElement {
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
            switch (currentPart) {
                case "body_g":
                    personAuswahl.body = _auswahl;
                    break;
                case "hair":
                    personAuswahl.hair = _auswahl;
                    break;
                case "outfit":
                    personAuswahl.outfit = _auswahl;
                    break;
            }
            localStorage.setItem("selection", JSON.stringify(personAuswahl));
            switch (currentPart) {
                case "body":
                    window.location.assign("./index.html");
                    break;
                case "hair":
                    window.location.assign("./hair.html");
                    break;
                case "outfit":
                    window.location.assign("./outfit.html");
                    break;
            }
        }
    }
    function showPossibilities(_parts: Beschreibung[]): void {
        let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("auswahlBereich");
        for (let i: number = 0; i < _parts.length; i++) {
            let div: HTMLDivElement = bodyDiv1(_parts[i]);
            wrapper.appendChild(div);
        }
    }


    // Aufgabe 2

    let selectionPreview: HTMLElement = <HTMLElement>document.getElementById("schonAusgewaehlt");

    if (personAuswahl.body) {
        selectionPreview.appendChild(createImage(localStorage.getItem(personAuswahl.body.bild)));
    } else {
        selectionPreview.appendChild(createImage("./img/sex.png"));
    }
    if (personAuswahl.hair) {
        selectionPreview.appendChild(createImage(localStorage.getItem(personAuswahl.hair.bild)));
    } else {
        selectionPreview.appendChild(createImage("./img/woman-hair.png"));
    }
    if (personAuswahl.outfit) {
        selectionPreview.appendChild(createImage(localStorage.getItem(personAuswahl.outfit.bild)));
    } else {
        selectionPreview.appendChild(createImage("./img/male-clothes.png"));
    }

    function createImage(_src: string): HTMLImageElement {
        let img: HTMLImageElement = document.createElement("img");
        img.src = _src;
        return img;
    }
}