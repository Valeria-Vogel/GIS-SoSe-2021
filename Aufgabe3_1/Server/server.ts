import * as Http from "http"; //sämtlich Funktionalitäten werden importiert, mit Zugriff auf Funktionen und Objekte der Module

export namespace Aufgabe3_1 {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);   //Informationen zur Port-Umgebung
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer(); //erstellt Server
    server.addListener("request", handleRequest);  //sendet anfrage an handleRequest
    server.addListener("listening", handleListen); //hört dem Ablauf des Programms zu/ schaut über die Eingabe im Formular
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");   // gibt bei zuhören "Listening" aus 
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); // gibt I hear voices aus, nach dem Formular überprüft wurde
        _response.setHeader("content-type", "text/html; charset=utf-8");    //Headertyp wird gesetzt
        _response.setHeader("Access-Control-Allow-Origin", "*");    //sämtliche Funktionalitäten werden dem Header hinzugefügt
        _response.write(_request.url);  //Der request wird in url ausgegeben
        _response.end();
    }
}