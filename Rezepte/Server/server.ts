import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Prüfung {

    let rezepte: Rezepte;
    let _mongoUrl: string = "mongodb+srv://new-user1:pilz123@gis-2021.qpo9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    export interface Rezepte {
        _id: string;
        img_url: string;
        name: string;
    }

    startServer();
    async function startServer(): Promise<void> {
        console.log("Server wird gestartet");
        //DB Connection
        console.log("Datenbank wird verbunden...");

        await connectToDB();

        let port: number = Number(process.env.PORT);
        if (!port)
            port = 8100;

        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }


    function handleListen(): void {
        console.log("Es wird gesucht");
    }


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Gefunden!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            if (url.pathname == "/send") {
                let response: string = await submitText(rezepte);
                _response.write(response + "\n");
            }
            if (url.pathname == "/receive") {
                let response: Rezepte[] = await gerichtHinzu();
                _response.write(JSON.stringify(response));
            }
            _response.end();
        }

    }


    async function connectToDB(): Promise<Mongo.Collection> {
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        let collection: Mongo.Collection = mongoClient.db("Rezepte").collection("Gerichte");
        console.log("Database connection", collection != undefined);
        console.log("Finde alles");
        let cursor: Mongo.Cursor<Rezepte> = await collection.find();
        await cursor.toArray();
        return collection;
    }

    async function submitText(rezepte: Rezepte): Promise<string> {
        let gerichte: Mongo.Collection = await connectToDB();
        let output: string = "";

        if (rezepte.name + "" == "NaN") {
            output = "";
        }
        else if (await gerichte.countDocuments({ "Gericht": rezepte.name }) != 0) {
            output = "Eintrag";
        }
        else {
            gerichte.insertOne(rezepte);
            output = "Rezept:";
        }
        return output;
    }
    async function gerichtHinzu(): Promise<Rezepte[]> {
        let gerichte: Mongo.Collection = await connectToDB();
        let cursor: Mongo.Cursor = gerichte.find();
        let result: Rezepte[] = await cursor.toArray();
        return result;
    }


}
