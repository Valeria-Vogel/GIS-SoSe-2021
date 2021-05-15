namespace Aufgabe2_3 {


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
        button.addEventListener("click", wahlmoeglichkeit2);
        button.dataset.index = _index.toString();

        div.appendChild(button);

        return div;

        function wahlmoeglichkeit(_event: Event): void {
            console.log("Wahl", _wahl);
        }
    }
    function wahlmoeglichkeit2(_e: Event): void {
        let target: HTMLElement = <HTMLElement>_e.currentTarget;
        let index: number = Number(target.dataset.index);

        console.log("äußere Funktion", wahl.body[index]);
    }

    function showPossibilities(_wahl: Beschreibung[]): void {
        let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("selectionWrapper");
        for (let i: number = 0; i < _wahl.length; i++) {
            let div: HTMLDivElement = zusammenbau(_wahl[i], i);
            wrapper.appendChild(div);
        }
    }

    showPossibilities(wahl.body);


}