"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = __importDefault(require("../models/book"));
exports.addBookMutation = function (parent, args) {
    var name = args.name, genre = args.genre, authorId = args.authorId;
    var newBook = new book_1.default({
        name: name,
        genre: genre,
        authorId: authorId
    });
    return newBook.save();
};
