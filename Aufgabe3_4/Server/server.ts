import * as Http from "http";

import * as Url from "url";

import * as Mongo from "mongodb";

export namespace Aufgabe3_4 {

    export interface Feedback {
        _id: string;
        name: string;
        firstname: string;
        registration: number;
        message: string;
    }

    startServer();
    async function startServer(): Promise<void> {
        console.log("Starting server");
        //DB Connection
        console.log("Connecting to DB...");

        await connectToDB("mongodb+srv://new-user1:<password>@gis-2021.qpo9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

        let port: number = Number(process.env.PORT);
        if (!port)
            port = 8100;
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }


    function handleListen(): void {
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br>");
                }
            }
            if (url.pathname == "/json") {
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
            }
            _response.end();


        }
    }

    async function connectToDB(_url: string): Promise<void> {
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        let collection: Mongo.Collection = mongoClient.db("Test").collection("Students");
        console.log("Database connection", collection != undefined);
        console.log("findAll");
        let cursor: Mongo.Cursor<Feedback> = await collection.find();
        await cursor.toArray();
       
    }

}
