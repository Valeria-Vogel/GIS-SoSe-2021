"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prüfung = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Prüfung;
(function (Prüfung) {
    let rezepte;
    let _mongoUrl = "mongodb+srv://new-user1:pilz123@gis-2021.qpo9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    startServer();
    async function startServer() {
        console.log("Server wird gestartet");
        //DB Connection
        console.log("Datenbank wird verbunden...");
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
        console.log("Es wird gesucht");
    }
    async function handleRequest(_request, _response) {
        console.log("Gefunden!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/send") {
                let response = await submitText(rezepte);
                _response.write(response + "\n");
            }
            if (url.pathname == "/receive") {
                let response = await gerichtHinzu();
                _response.write(JSON.stringify(response));
            }
            _response.end();
        }
    }
    async function connectToDB() {
        let mongoClient = new Mongo.MongoClient(_mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        let collection = mongoClient.db("Rezepte").collection("Gerichte");
        console.log("Database connection", collection != undefined);
        console.log("Finde alles");
        let cursor = await collection.find();
        await cursor.toArray();
        return collection;
    }
    async function submitText(rezepte) {
        let gerichte = await connectToDB();
        let output = "";
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
    async function gerichtHinzu() {
        let gerichte = await connectToDB();
        let cursor = gerichte.find();
        let result = await cursor.toArray();
        return result;
    }
})(Prüfung = exports.Prüfung || (exports.Prüfung = {}));
//# sourceMappingURL=server.js.map