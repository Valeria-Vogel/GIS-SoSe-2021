"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    /* document.getElementById("Button").addEventListener("click", handelButtonClick);
 
     function handelButtonClick(): void {
         response("https://gissose2021heroku.herokuapp.com");
         console.log("Es läuft!");
     }
     async function response(_url: RequestInfo): Promise<void> {
         let formData: FormData = new FormData(document.forms[0]);
         let query: URLSearchParams = new URLSearchParams(<any>formData);
         _url = _url + "?" + query.toString();
         let serverResponse: Response = await fetch(_url);
         let responseString: string = await serverResponse.text();
         sessionStorage.setItem("answer", responseString);
 
     }
     console.log(sessionStorage.getItem("answer"));
 */
    let submitBtn = document.getElementById("Button");
    submitBtn.addEventListener("click", click);
    async function click() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021heroku.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        showResponse(responseText);
        console.log(responseText);
    }
    function showResponse(response) {
        let responseDiv = document.getElementById("response");
        responseDiv.innerHTML = "Serverantwort: " + response;
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map