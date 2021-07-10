"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prüfung = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Prüfung;
(function (Prüfung) {
    let _mongoUrl = "mongodb+srv://new-user1:pilz123@gis-2021.qpo9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    startServer();
    async function startServer() {
        console.log("Starting server");
        //DB Connection
        console.log("Connecting to DB...");
        await connectToDB();
        let port = Number(process.env.PORT);
        if (!port)
            port = 8100;
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/send") {
                let response = await submitText();
                _response.write(response + "\n");
            }
            /*  if (url.pathname == "/receive") {
                  let response: Feedback[] = await giveFeedback();
                  _response.write(JSON.stringify(response));
              }
              _response.end();*/
        }
    }
    async function connectToDB() {
        let mongoClient = new Mongo.MongoClient(_mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        let collection = mongoClient.db("Test").collection("Students");
        /*console.log("Database connection", collection != undefined);
        console.log("findAll");
        let cursor: Mongo.Cursor<Feedback> = await collection.find();
        await cursor.toArray();
*/
        return collection;
    }
    async function submitText() {
        let students = await connectToDB();
        let output = "";
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
})(Prüfung = exports.Prüfung || (exports.Prüfung = {}));
//# sourceMappingURL=server.js.map