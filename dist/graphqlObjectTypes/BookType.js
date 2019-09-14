"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var AuthorType_1 = __importDefault(require("./AuthorType"));
var BookResolvers_1 = require("../resolves/BookResolvers");
var BookType = new graphql_1.GraphQLObjectType({
    name: 'Book',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        genre: { type: graphql_1.GraphQLString },
        author: {
            type: AuthorType_1.default,
            resolve: BookResolvers_1.authorResolverInBookType
        }
    }); }
});
exports.default = BookType;
