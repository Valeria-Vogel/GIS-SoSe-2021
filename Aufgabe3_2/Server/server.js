"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_1 = void 0;
const Http = require("http");
const Url = require("url");
var Aufgabe3_1;
(function (Aufgabe3_1) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/html") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                for (let key in url.query) {
                    _response.write("<p>" + key + ":" + url.query[key] + "</p>");
                }
            }
            if (path == "/json") {
                _response.setHeader("content-type", "application/json");
                let sendObject = JSON.stringify(url.query);
                console.log(sendObject);
                _response.write(sendObject);
            }
        }
        _response.end();
        /* console.log( "http://" + _request.headers.host + _request.url);
        let jsonString: string = JSON.stringify(url.query);
        _response.write(jsonString);
        let u: URL = new URL(_request.url, "http://" + _request.headers.host);
        console.log(u);*/
    }
})(Aufgabe3_1 = exports.Aufgabe3_1 || (exports.Aufgabe3_1 = {}));
//# sourceMappingURL=server.js.map