"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prüfung = void 0;
const Http = require("http"); //sämtlich Funktionalitäten werden importiert, mit Zugriff auf Funktionen und Objekte der Module
var Prüfung;
(function (Prüfung) {
    console.log("Starting server");
    let port = Number(process.env.PORT); //Informationen zur Port-Umgebung
    if (!port)
        port = 8100;
    let server = Http.createServer(); //erstellt Server
    server.addListener("request", handleRequest); //sendet anfrage an handleRequest
    server.addListener("listening", handleListen); //hört dem Ablauf des Programms zu/ schaut über die Eingabe im Formular
    server.listen(port);
    function handleListen() {
        console.log("Listening"); // gibt bei zuhören "Listening" aus 
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // gibt I hear voices aus, nach dem Formular überprüft wurde
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Headertyp wird gesetzt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //sämtliche Funktionalitäten werden dem Header hinzugefügt
        _response.write(_request.url); //Der request wird in url ausgegeben
        _response.end();
    }
})(Prüfung = exports.Prüfung || (exports.Prüfung = {}));
//# sourceMappingURL=server.js.map