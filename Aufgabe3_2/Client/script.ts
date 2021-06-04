namespace Aufgabe3_1 {

    let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("submit");
    btn.addEventListener("click", betaetigen);
    
    async function betaetigen(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2021heroku.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();  
        let response: Response = await fetch(url, { method: "get"});
        let responseText: string = await response.text();
        console.log(responseText);     
    }
}