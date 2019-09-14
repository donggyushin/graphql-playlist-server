"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var books_1 = __importDefault(require("../sampleData/books"));
var author_1 = __importDefault(require("../sampleData/author"));
var lodash_1 = __importDefault(require("lodash"));
exports.allBookResolver = function (parent, args) {
    return books_1.default;
};
exports.bookResolver = function (parent, args) {
    // code to get data from db / other sources
    var id = args.id;
    var books = lodash_1.default.find(books_1.default, { id: id });
    return books;
};
exports.authorResolverInBookType = function (parent, args) {
    var authorId = parent.authorId;
    var authors = lodash_1.default.find(author_1.default, { id: authorId });
    return authors;
};
