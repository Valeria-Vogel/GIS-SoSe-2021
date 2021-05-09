namespace aufgabe2_3 {

    let body: HTMLElement = document.body;

    function rechteck(): void {

        for (let i: number = 0; i < 1; i++) {
            let rechteck: HTMLDivElement = document.createElement("div");
            rechteck.style.height = (Math.random() * 300).toString() + "px";
            rechteck.style.width = (Math.random() * 300).toString() + "px";
            rechteck.style.backgroundColor = "#186";
            rechteck.style.margin = (Math.random() * 300).toString() + "px";
            rechteck.classList.add("rect");
            body.appendChild(rechteck);
            body = rechteck;
        }

        for (let i: number = 0; i < 1; i++) {
            let rechteck: HTMLDivElement = document.createElement("div");
            rechteck.style.height = (Math.random() * 300).toString() + "px";
            rechteck.style.width = (Math.random() * 300).toString() + "px";
            rechteck.style.backgroundColor = "#014";
            rechteck.style.margin = (Math.random() * 200).toString() + "px";
            rechteck.classList.add("rect");
            body.appendChild(rechteck);
            body = rechteck;
        }
        for (let i: number = 0; i < 1; i++) {
            let rechteck: HTMLDivElement = document.createElement("div");
            rechteck.style.height = (Math.random() * 300).toString() + "px";
            rechteck.style.width = (Math.random() * 300).toString() + "px";
            rechteck.style.backgroundColor = "#177";
            rechteck.style.margin = (Math.random() * 250).toString() + "px";
            rechteck.classList.add("rect");
            body.appendChild(rechteck);
            body = rechteck;
        }
        for (let i: number = 0; i < 1; i++) {
            let rechteck: HTMLDivElement = document.createElement("div");
            rechteck.style.height = (Math.random() * 300).toString() + "px";
            rechteck.style.width = (Math.random() * 300).toString() + "px";
            rechteck.style.backgroundColor = "red";
            rechteck.style.margin = (Math.random() * 100).toString() + "px";
            rechteck.classList.add("rect");
            body.appendChild(rechteck);
            body = rechteck;
        }
        for (let i: number = 0; i < 1; i++) {
            let rechteck: HTMLDivElement = document.createElement("div");
            rechteck.style.height = (Math.random() * 300).toString() + "px";
            rechteck.style.width = (Math.random() * 300).toString() + "px";
            rechteck.style.backgroundColor = "lightgreen";
            rechteck.style.margin = (Math.random() * 350).toString() + "px";
            rechteck.classList.add("rect");
            body.appendChild(rechteck);
            body = rechteck;
        }
        for (let i: number = 0; i < 1; i++) {
            let rechteck: HTMLDivElement = document.createElement("div");
            rechteck.style.height = (Math.random() * 300).toString() + "px";
            rechteck.style.width = (Math.random() * 300).toString() + "px";
            rechteck.style.backgroundColor = "yellow";
            rechteck.style.margin = (Math.random() * 400).toString() + "px";
            rechteck.classList.add("rect");
            body.appendChild(rechteck);
            body = rechteck;
        }
    }


    function ruecksetzen(): void {
        body.reset();
    }

    let plusButton: HTMLButtonElement = document.createElement("button");
    body.appendChild(plusButton);
    plusButton.innerHTML = "Rechteck hinzufügen";
    plusButton.addEventListener("click", rechteck);

    let zuruecksetzen: HTMLButtonElement = document.createElement("button");
    body.appendChild(zuruecksetzen);
    zuruecksetzen.innerHTML = "Seite Rücksetzen";
    zuruecksetzen.addEventListener("click", ruecksetzen);

}