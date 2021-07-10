namespace Prüfung {

    export interface Login {
        message: string;
        error: string;
    }
   /* async function clickLogin(): Promise<void> {
        handleRequest(0);

    }
    async function clickRegistration(): Promise<void> {
        handleRequest(1);
    }

    async function clickDelete(): Promise<void> {
        handleRequest(2);

    }*/

    let signin: HTMLButtonElement = <HTMLButtonElement>document.getElementById("signIn");
    let anmelden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
    let fertig: HTMLButtonElement = <HTMLButtonElement>document.getElementById("fertig");

    signin.addEventListener("click", function (): void {
        betaetigen();
        console.log("Eingelogt");
        
    });

    anmelden.addEventListener("click", function (): void {
        betaetigen();
        console.log("Regestriert");
        
    });
    fertig.addEventListener("click", function (): void {
        betaetigen();
        console.log("Rezept Erstellt");
        
    });

    async function betaetigen(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2021heroku.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();  
        let response: Response = await fetch(url, { method: "get"});
        let responseText: string = await response.text();
        console.log(responseText);     
        console.log("läuft");
        
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
}


