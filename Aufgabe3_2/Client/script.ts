namespace Aufgabe3_1 {

    
    //let url: string = "http://localhost:8100/";
    //let url: string = "https://gissose2021heroku.herokuapp.com/";
    let url: string = "";
    let type: string = "";

    let htmlSubmit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlsubmit");
    let jsonSubmit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonsubmit");
    let responseDIV: HTMLDivElement = <HTMLDivElement>document.getElementById("responseDIV");


    jsonSubmit.addEventListener("click", function (): void {
        url = "./json";
        type = "/json";
        betaetigen();
    });

    htmlSubmit.addEventListener("click", function (): void {
        url = "index.html";
        type = "/html";
        betaetigen();
    });

    async function betaetigen(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        //tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let response: Response = await fetch(url += "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText);
        let jsonString: string;

        if (type == "/json") {
            let responseJSON: JSON = JSON.parse(jsonString);
            console.log(responseJSON);
        } else if (type == "/html") {
            responseDIV.innerHTML = "";
            let getText: DocumentFragment = document.createRange().createContextualFragment(responseText);
            responseDIV.appendChild(getText);
        }
        //url = "https://gissose2021heroku.herokuapp.com/";
        //url = "http://localhost:8100/";
    }
}