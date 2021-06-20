"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    startServer();
    async function startServer() {
        console.log("Starting server");
        //DB Connection
        console.log("Connecting to DB...");
        await connectToDB("mongodb+srv://new-user1:<password>@gis-2021.qpo9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
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
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Header wird erstellt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //jeder hat access
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            _response.setHeader("content-type", "application/json");
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.end();
    }
    let mongoClient;
    let collection;
    async function connectToDB(_url) {
        mongoClient = new Mongo.MongoClient(_url, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        collection = mongoClient.db("dbname").collection("collname");
        console.log("Database connection", collection != undefined);
    }
    Aufgabe3_4.connectToDB = connectToDB;
    async function findAll() {
        console.log("findAll");
        let cursor = await collection.find();
        return await cursor.toArray();
    }
    Aufgabe3_4.findAll = findAll;
    // tslint:disable-next-line: no-any
    async function insert(_fb) {
        console.log("insert " + _fb.name + "'s feedback.");
        return await collection.insertOne(_fb);
    }
    Aufgabe3_4.insert = insert;
    async function removeOne(_query) {
        let id = _query["id"];
        let objID = new Mongo.ObjectId(id);
        console.log("remove", id);
        return await collection.deleteOne({ "_id": objID });
    }
    Aufgabe3_4.removeOne = removeOne;
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map