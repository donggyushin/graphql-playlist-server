"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var author_1 = __importDefault(require("../sampleData/author"));
var lodash_1 = __importDefault(require("lodash"));
var books_1 = __importDefault(require("../sampleData/books"));
exports.authorResolver = function (parent, args) {
    var id = args.id;
    var authors = lodash_1.default.find(author_1.default, { id: id });
    return authors;
};
exports.booksResolverInAuthorType = function (parent, args) {
    var id = parent.id;
    var books = lodash_1.default.filter(books_1.default, {
        authorId: id
    });
    return books;
};
