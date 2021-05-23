namespace Aufgabe2_5 {

    let wahl: Darstellung;

    async function communicate(_url: RequestInfo): Promise<void> {

        let response: Response = await fetch(_url);
        console.log("Response", response);
        wahl = await response.json();
        console.log(wahl.body);
        console.log(wahl.hair);
        console.log(wahl.outfit);
    }

    communicate("https://valeria-vogel.github.io/GIS-SoSe-2021/Aufgabe2_5/script/data.JSON");



    let previousElement: HTMLElement = document.getElementById("auswahlBereich");
    let h4: HTMLElement = document.createElement("h4");
    h4.style.margin = "10px";
    document.body.appendChild(h4);

    function openNextSite(): void {

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
            let button: HTMLButtonElement = document.createElement("button");
            button.innerText = "Wählen";
            button.addEventListener("click", wahlmoeglichkeit);
    
    
            function wahlmoeglichkeit(_event: Event): void {
    
                location.href = "index.html";
                window.open("index.html", "_self");
            }  
          

        }

    }

    function waehlen(): Beschreibung[] {
          let auswahl: Beschreibung[] = wahl.body;
  
          if (window.location.href.includes("haare.html"))
              auswahl = wahl.hair;
  
          if (window.location.href.includes("kleidung.html"))
              auswahl = wahl.outfit;
  
          return auswahl;
      }

    function speichern(_bild: string): void {

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

    function aktuell(): void {


        if (window.location.href.includes("haare.html")) {

            let aktuelldiv: HTMLElement = document.getElementById("schonAusgewaehlt");
            aktuelldiv.classList.add("teil");

            let img: HTMLElement = document.createElement("img");
            img.classList.add("teil");

            img.setAttribute("src", localStorage.getItem("body"));

            aktuelldiv.appendChild(img);

        }

    }
    if (window.location.href.includes("kleidung.html")) {

        let aktuelldiv: HTMLElement = document.getElementById("schonAusgewaehlt");
        aktuelldiv.classList.add("teil");

        for (let i: number = 0; i < 2; i++) {
            let img: HTMLElement = document.createElement("img");
            img.classList.add("teil");

            img.setAttribute("src", localStorage.getItem(i.toString()));
            //img.setAttribute("src", localStorage.getItem("hair"));
            
            aktuelldiv.appendChild(img);
        }

        if (window.location.href.includes("ergebnis.html")) {

            /* let query: URLSearchParams = new URLSearchParams(<any>browserCacheData);
             url = url + "?" + query.toString();
             await fetch("https://gis-communication.herokuapp.com");*/


            let aktuelldiv: HTMLElement = document.getElementById("schonAusgewaehlt");
            aktuelldiv.classList.add("teil");

            for (let i: number = 0; i < 3; i++) {
                let img: HTMLElement = document.createElement("img");
                img.classList.add("teil");

                img.setAttribute("src", localStorage.getItem(i.toString()));
                //img.setAttribute("src", localStorage.getItem("hair"));
                // img.setAttribute("src", localStorage.getItem("outfit"));
                
                aktuelldiv.appendChild(img);
            }


        }
        aktuell();



        function auswaehlen(): void {
            let gewaehltes: Beschreibung[] = waehlen();
            for (let i: number = 0; i < gewaehltes.length; i++) {

                let img: HTMLElement = document.createElement("img");
                img.classList.add("teil");
                img.setAttribute("src", gewaehltes[i].bild);


                img.addEventListener("click", function (): void { speichern(gewaehltes[i].bild); });
                img.addEventListener("click", openNextSite);


                img.id = gewaehltes[i].bildId;
                previousElement.appendChild(img);

            }
        }
        auswaehlen();

    }

}