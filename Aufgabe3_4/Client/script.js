"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let url = "https://gissose2021heroku.herokuapp.com";
    /*
        let btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
        btn.addEventListener("click", insert);
        let btn2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
        btn2.addEventListener("click", insert);
    
    */
    let s;
    document.getElementById("submit").addEventListener("click", sendData);
    document.getElementById("feedback").addEventListener("click", receiveData);
    function sendData() {
        insert(0);
    }
    function receiveData() {
        insert(1);
    }
    //let serverURL: string = "http://localhost:8100";
    //let type: string;
    /* async function insert(_e: Event): Promise<void> {
 
         let formData: FormData = new FormData(document.forms[0]);
 
         // tslint:disable-next-line: no-any
         let query: URLSearchParams = new URLSearchParams(<any>formData);
 
         let response: Response = await fetch(url += "?" + query.toString());
         let responseText: string = await response.text();
 
         /*  console.log(await response.json());*/
    /* console.log(responseText);

     if (type == "/send") {
         let responseJSON: JSON = JSON.parse(responseText);
         console.log(responseJSON);


     }

 }*/
    async function insert(type) {
        let formData = new FormData(document.forms[0]);
        //tslint:disable-next-line
        let query = new URLSearchParams(formData);
        if (type == 0) {
            url += "/send" + "?" + query.toString();
            let response = await fetch(url);
            let responseString = await response.text();
            console.log("Data Sent", s);
            console.log("URL:", url);
            document.getElementById("output").innerHTML += responseString + "\n\n";
        }
        else if (type == 1) {
            url += "/receive" + "?" + query.toString();
            let response = await fetch(url);
            let responseJSON = await response.json();
            document.getElementById("response").innerHTML += JSON.stringify(responseJSON) + "\n\n";
            console.log("Data Received.\nURL: " + url);
        }
        else {
            url += "/del" + "?" + query.toString();
            let response = await fetch(url);
            let responseString = await response.text();
            console.log("Entry " + s.registration + " deleted.\nURL: " + url);
            document.getElementById("response").innerHTML += responseString + "\n\n";
        }
        url = "https://gissose2021heroku.herokuapp.com";
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map