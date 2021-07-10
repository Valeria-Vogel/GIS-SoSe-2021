import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Prüfung {

    let _mongoUrl: string = "mongodb+srv://new-user1:pilz123@gis-2021.qpo9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


    startServer();
    async function startServer(): Promise<void> {
        console.log("Starting server");
        //DB Connection
        console.log("Connecting to DB...");

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
        console.log("Listening");
    }


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            if (url.pathname == "/send") {
                let response: string = await submitText();
                _response.write(response + "\n");
            }
            /*  if (url.pathname == "/receive") {
                  let response: Feedback[] = await giveFeedback();
                  _response.write(JSON.stringify(response));
              }
              _response.end();*/
        }

    }


    async function connectToDB(): Promise<Mongo.Collection> {
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        let collection: Mongo.Collection = mongoClient.db("Test").collection("Students");
        /*console.log("Database connection", collection != undefined);
        console.log("findAll");
        let cursor: Mongo.Cursor<Feedback> = await collection.find();
        await cursor.toArray();
*/
        return collection;
    }

    async function submitText(): Promise<string> {
        let students: Mongo.Collection = await connectToDB();
        let output: string = "";
        console.log("Geht es?s");

        /*
                if (f.registration + "" == "NaN") {
                    output = "";
                }
                else if (await students.countDocuments({ "Matrikelnummer": f.registration }) != 0) {
                    output = "Eintrag";
                }
                else {
                    students.insertOne(f);
                    output = "Feedback:";
                }*/
        return output;
    }
    /*async function giveFeedback(): Promise<Feedback[]> {
        let students: Mongo.Collection = await connectToDB();
        let cursor: Mongo.Cursor = students.find();
        let result: Feedback[] = await cursor.toArray();
        return result;
    }*/


}
