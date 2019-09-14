"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost/graphql-playlist', { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', function () { return console.log("Mongoose database connected!"); });
exports.default = mongoose_1.default;
