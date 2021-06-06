namespace Aufgabe3_1 {

    let url: string = "index.html";

    let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("submit");
    btn.addEventListener("click", betaetigen);
    
    async function betaetigen(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

       // let url: string = "https://gissose2021heroku.herokuapp.com/";

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let response: Response = await fetch(url += "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText);     
    }
}