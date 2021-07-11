namespace Prüfung {


    let fertig: HTMLButtonElement = <HTMLButtonElement>document.getElementById("fertig");

    fertig.addEventListener("click", function (): void {
        betaetigen();
        console.log("Rezept Erstellt");

    });

    async function betaetigen(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2021heroku.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

    }

    document.getElementById("plusZutat").addEventListener("click", Zutat);
    function Zutat(): void {
        let plusZutaten: HTMLInputElement = document.createElement("input");
        let gegeben: HTMLElement = document.getElementById("zusatzZutat");
        gegeben.appendChild(plusZutaten);
    }

}


