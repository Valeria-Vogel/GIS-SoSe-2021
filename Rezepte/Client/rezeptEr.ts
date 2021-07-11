namespace Prüfung {

    export interface Login {
        message: string;
        error: string;
    }

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
        let response: Response = await fetch(url, { method: "get" });
        let responseText: string = await response.text();
        console.log(responseText);
        console.log("läuft");

    }

}


