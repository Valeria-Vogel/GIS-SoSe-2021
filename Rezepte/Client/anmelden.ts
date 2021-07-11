namespace Prüfung {

    export interface Login {
        message: string;
        error: string;
    }

    let anmelden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");

    anmelden.addEventListener("click", function (): void {
        betaetigen();
        console.log("Regestriert");

    });


    async function betaetigen(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2021heroku.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
    

    }
}


