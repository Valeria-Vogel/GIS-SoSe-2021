namespace Prüfung {


    let signin: HTMLButtonElement = <HTMLButtonElement>document.getElementById("signin");
   
    signin.addEventListener("click", function (): void {
        betaetigen();
        console.log("Eingelogt");

    });


    async function betaetigen(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2021heroku.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
    }
}


