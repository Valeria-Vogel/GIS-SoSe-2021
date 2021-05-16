namespace Aufgabe2_4 {

    /* let einePerson: Darstellung = konvertieren();
 
     function konvertieren(): Darstellung {
         let auswahl: Darstellung = JSON.parse(auswahlJSON);
         return auswahl;
     }*/
    function zusammenbau(_wahl: Beschreibung, _index: number): HTMLDivElement {
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
            sessionStorage.setItem("body", _wahl.bild);
            sessionStorage.setItem("geschlecht", _wahl.was);
            location.href = "Haare.html";
        }
    }


    function showPossibilities(_wahl: Beschreibung[]): void {
        let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("auswahlBereich");
        for (let i: number = 0; i < _wahl.length; i++) {
            let div: HTMLDivElement = zusammenbau(_wahl[i], i);
            wrapper.appendChild(div);

        }
    }

    showPossibilities(wahl.body);
    showPossibilities(wahl.hair);

  






}







