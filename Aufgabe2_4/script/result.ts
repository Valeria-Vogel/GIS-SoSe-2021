namespace Aufgabe2_4 {
    let personAuswahl: Selection = {};
    let storedSelection: string = localStorage.getItem("selection");
    if (storedSelection) {
      personAuswahl = JSON.parse(storedSelection);
    }
  
    let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("ergebnisZeigen");
  
    if (personAuswahl.body_g) {
      wrapper.appendChild(createImage("./img/femenine.png"));
    } else {
      wrapper.appendChild(createImage("./img/sex.png"));
    }
    if (personAuswahl.hair) {
      wrapper.appendChild(createImage(personAuswahl.hair.bild));
    } else {
      wrapper.appendChild(createImage("./img/woman-hair.png"));
    }
    if (personAuswahl.outfit) {
      wrapper.appendChild(createImage(personAuswahl.outfit.bild));
    } else {
      wrapper.appendChild(createImage("./img/male-colthing.png"));
    }
  
    function createImage(_src: string): HTMLImageElement {
      let img: HTMLImageElement = document.createElement("img");
      img.src = _src;
      return img;
    }
  
    document.getElementById("tryagain").addEventListener("click", restart);
  
    function restart(): void {
      localStorage.clear();
      window.location.assign("./");
    }

}