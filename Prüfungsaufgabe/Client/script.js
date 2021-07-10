"use strict";
var Prüfung;
(function (Prüfung) {
    /* async function clickLogin(): Promise<void> {
         handleRequest(0);
 
     }
     async function clickRegistration(): Promise<void> {
         handleRequest(1);
     }
 
     async function clickDelete(): Promise<void> {
         handleRequest(2);
 
     }*/
    let signin = document.getElementById("signIn");
    let anmelden = document.getElementById("submit");
    let fertig = document.getElementById("fertig");
    signin.addEventListener("click", function () {
        betaetigen();
        console.log("Eingelogt");
    });
    anmelden.addEventListener("click", function () {
        betaetigen();
        console.log("Regestriert");
    });
    fertig.addEventListener("click", function () {
        betaetigen();
        console.log("Rezept Erstellt");
    });
    async function betaetigen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021heroku.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        console.log(responseText);
    }
    /* if (loginAnswer.error != null) {
         meineRezepte.innerHTML = loginAnswer.error; //wird in DIV ausgegeben
         console.log("ALERT: Woops, maybe try another passwort or username!");
     }
     else if (loginAnswer.message != null) {
         window.open("../AlleRezepte.html");
         meineRezepte.innerHTML = loginAnswer.message;
     }*/
    /* async function handleRequest(type: number): Promise<void> {
         let formData: FormData = new FormData(document.forms[0]);
         // tslint:disable-next-line: no-any
         let query = new URLSearchParams(<any>formData);
 
         if (type == 0) {
             let url += "/login" + "?" + query.toString();          //Stringumwandlung
             let response: Response = await fetch(url);  //Wartet auf die URL
             let responseText: string = await response.text();
             console.log(responseText);
             let loginAnswer: Login = JSON.parse(responseText); //JSON Okjekt wird erstellt
 
             //Soll überprüft werden, ob Userdaten richtig eingegeben wurden, falls ja Weiterleitung zu AlleRezepte, falls nein Fehlermeldung
             if (loginAnswer.error != null) {
                 meineRezepte.innerHTML = loginAnswer.error; //wird in DIV ausgegeben
                 console.log("ALERT: Woops, maybe try another passwort or username!");
             }
             else if (loginAnswer.message != null) {
                 window.open("../AlleRezepte.html");
                 meineRezepte.innerHTML = loginAnswer.message;
             }
         }
 
         else if (type == 1) {
             url += "/registration" + "?" + query.toString();          //zu string umwandeln
             let response: Response = await fetch(url);  //auf url warten      //antwort wartet auf die Server url
             let responseText: string = await response.text(); //json okject erstellen
             console.log(responseText);
         }
 
         else {
             url += "/delete" + "?" + query.toString();
             let response: Response = await fetch(url);
             let responseText: string = await response.text();
             console.log("DELETET: User (" + u + ")\nURL: " + url);
             document.getElementById("output").innerHTML += responseText + "\n\n";
         }*/
})(Prüfung || (Prüfung = {}));
//# sourceMappingURL=script.js.map