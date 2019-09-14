"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var BookType_1 = __importDefault(require("./BookType"));
var AuthorResolvers_1 = require("../resolves/AuthorResolvers");
var AuthorType = new graphql_1.GraphQLObjectType({
    name: 'Author',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        age: { type: graphql_1.GraphQLInt },
        books: {
            type: new graphql_1.GraphQLList(BookType_1.default),
            resolve: AuthorResolvers_1.booksResolverInAuthorType
        }
    }); }
});
exports.default = AuthorType;
