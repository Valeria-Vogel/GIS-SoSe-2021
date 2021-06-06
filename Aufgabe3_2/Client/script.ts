namespace Aufgabe3_1 {
    
    let formData: FormData;
    let url: string = "http://localhost:8100/";
    let type: string = "";
    
    let htmlSubmit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlsubmit");
    let jsonSubmit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonsubmit");
    let responseDIV: HTMLDivElement = <HTMLDivElement>document.getElementById("responseDIV");

    jsonSubmit.addEventListener("click", function(): void {
        type = "json";
        handleSubmit();
    });

    htmlSubmit.addEventListener("click", function(): void {
        type = "html";
        handleSubmit();
    });
    async function handleSubmit(): Promise<void> {
        formData = new FormData(document.forms[0]);
        url += type;
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let response: Response = await fetch(url, { method: "get" });
        let responseString: string = await response.text();
        if (type == "json") {
            let responseJSON: JSON = JSON.parse(responseString);
            console.log(responseJSON);
        } else if (type == "html") {
            responseDIV.innerHTML = "";
            let frag: DocumentFragment = document.createRange().createContextualFragment(responseString);
            responseDIV.appendChild(frag);
        }
        url = "http://localhost:8100/";
    }

    //let url: string = "index.html";

    let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("submit");
    btn.addEventListener("click", betaetigen);
    
    async function betaetigen(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

       // let url: string = "https://gissose2021heroku.herokuapp.com/";

       //tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let response: Response = await fetch(url += "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText);     
    }
}