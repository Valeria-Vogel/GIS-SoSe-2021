"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    document.getElementById("Button").addEventListener("click", handelButtonClick);
    function handelButtonClick() {
        response("https://gissose2021heroku.herokuapp.com");
        console.log("Es läuft!");
    }
    async function response(_url) {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let serverResponse = await fetch(_url);
        let responseString = await serverResponse.text();
        sessionStorage.setItem("answer", responseString);
    }
    console.log(sessionStorage.getItem("answer"));
    /* let submitBtn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("Button");
    submitBtn.addEventListener("click", click);
    
    async function click(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2021heroku.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let response: Response = await fetch(url, { method: "get"});
        let responseText: string = await response.text();
        showResponse(responseText);
        console.log(responseText);
    }

    function showResponse(response: string): void {
        let responseDiv: HTMLDivElement = <HTMLDivElement> document.getElementById("response");
        responseDiv.innerHTML = "Serverantwort: " + response;
    }*/
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map