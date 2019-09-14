"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_graphql_1 = __importDefault(require("express-graphql"));
var schema_1 = __importDefault(require("./schema/schema"));
var graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
var app = express_1.default();
var PORT = 4000;
app.use('/graphql', express_graphql_1.default({
    schema: schema_1.default,
    graphiql: true
}));
app.use('/playground', graphql_playground_middleware_express_1.default({
    endpoint: '/graphql'
}));
app.listen(PORT, function () { return console.log("Graphql server listening on port " + PORT); });
