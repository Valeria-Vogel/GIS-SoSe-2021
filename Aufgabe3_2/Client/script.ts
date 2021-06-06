namespace Aufgabe3_1 {
    
    let url: string = "index.html";
    let type: string = "";

    let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("submit");
    let htmlSubmit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlsubmit");
    let jsonSubmit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonsubmit");
    let responseDIV: HTMLDivElement = <HTMLDivElement>document.getElementById("responseDIV");
    
    btn.addEventListener("click", betaetigen);

    jsonSubmit.addEventListener("click", function(): void {
        type = "/json";
        betaetigen();
    });

    htmlSubmit.addEventListener("click", function(): void {
        type = "/html";
        betaetigen();
    });

    async function betaetigen(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        //let url: string = "https://gissose2021heroku.herokuapp.com/";

       //tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let response: Response = await fetch(url += "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText);     

        if (type == "/json") {
            let responseJSON: JSON = JSON.parse(responseText);
            console.log(responseJSON);
        } else if (type == "/html") {
            responseDIV.innerHTML = "";
            let getText: DocumentFragment = document.createRange().createContextualFragment(responseText);
            responseDIV.appendChild(getText);
        }
    }
}