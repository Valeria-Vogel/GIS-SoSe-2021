import * as Http from "http";

import * as Url from "url";


export namespace Aufgabe3_1 {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);  
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer(); 
    server.addListener("request", handleRequest);  
    server.addListener("listening", handleListen); 
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");    
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); 

        _response.setHeader("content-type", "application/json");    
        _response.setHeader("Access-Control-Allow-Origin", "*");    
        
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key]);
                }
            }
            if (url.pathname == "/json") {
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
            }
            _response.end();

            console.log( "http://" + _request.headers.host + _request.url);
            let u: URL = new URL(_request.url, "http://" + _request.headers.host);
            console.log(u);
        }
    }
}