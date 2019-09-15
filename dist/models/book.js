"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("../mongoose/mongoose"));
var BookSchema = new mongoose_1.default.Schema({
    name: String,
    genre: String,
    authorId: String
});
var Book = mongoose_1.default.model('Book', BookSchema);
exports.default = Book;
