namespace Aufgabe2_4 {

    /* let einePerson: Darstellung = konvertieren();
 
     function konvertieren(): Darstellung {
         let auswahl: Darstellung = JSON.parse(auswahlJSON);
         return auswahl;
     }*/
   /* function zusammenbau(_wahl: Beschreibung, _index: number): HTMLDivElement {
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("teil");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _wahl.bild;
        div.appendChild(image);

        let span: HTMLSpanElement = document.createElement("span");
        span.innerText = _wahl.was;
        div.appendChild(span);

        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = "Wählen";
        button.addEventListener("click", wahlmoeglichkeit);
        button.dataset.index = _index.toString();

        div.appendChild(button);

        return div;


        function wahlmoeglichkeit(_event: Event): void {
            console.log("Wahl", _wahl);
            sessionStorage.setItem("image1", _wahl.bild);
            sessionStorage.setItem("art", _wahl.was);
            location.href = "haare.html";
        }

    }


    /*function showPossibilities(_wahl: Beschreibung[]): void {
        let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("auswahlBereich");
        for (let i: number = 0; i < _wahl.length; i++) {
            let div: HTMLDivElement = zusammenbau(_wahl[i], i);
            wrapper.appendChild(div);
        }
    }
    showPossibilities(wahl.body);*/


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

        console.log("click", _auswahl);
        return div;
        

        function wahlmoeglichkeit(_event: Event): void {
            console.log("Wahl", _auswahl);
            sessionStorage.setItem("bild", _auswahl.bild);
            sessionStorage.setItem("was", _auswahl.was);
            location.href = "haare.html";
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
            button.addEventListener("click", auswahlSegel);
            div.appendChild(button);
            function auswahlSegel(_event: Event): void {
                console.log(_auswahl.was);
                sessionStorage.setItem("bild", _auswahl.bild);
                sessionStorage.setItem("was", _auswahl.was);
                location.href = "kleidung.html";
            }
        }
        if ((document.querySelector("title").getAttribute("id") == "outfit")) {
            button.addEventListener("click", kleidWahl);
            div.appendChild(button);
            function kleidWahl(_event: Event): void {
                console.log("" + _auswahl.was);
                sessionStorage.setItem("", _auswahl.bild);
                sessionStorage.setItem("", _auswahl.was);
                location.href = "extra.html";
            }
        }
        console.log("click", _auswahl);
        
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

