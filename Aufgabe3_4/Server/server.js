"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
//import { ParsedUrlQuery } from "querystring";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let mongoClient;
    let collection;
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
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br>");
                }
            }
            if (url.pathname == "/json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
            _response.end();
        }
    }
    async function connectToDB(_url) {
        mongoClient = new Mongo.MongoClient(_url, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        collection = mongoClient.db("Test").collection("Students");
        console.log("Database connection", collection != undefined);
    }
    async function findAll() {
        console.log("findAll");
        let cursor = await collection.find();
        return await cursor.toArray();
    }
    Aufgabe3_4.findAll = findAll;
    // tslint:disable-next-line: no-any
    /* export async function insert(_fb: ParsedUrlQuery): Promise<Mongo.InsertOneWriteOpResult<any>> {
         console.log("insert " + _fb.name + "'s feedback.");
         return await collection.insertOne(_fb);
     }*/
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map