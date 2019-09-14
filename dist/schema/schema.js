"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var BookType_1 = __importDefault(require("../graphqlObjectTypes/BookType"));
var AuthorType_1 = __importDefault(require("../graphqlObjectTypes/AuthorType"));
var BookResolvers_1 = require("../resolves/BookResolvers");
var AuthorResolvers_1 = require("../resolves/AuthorResolvers");
var RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType_1.default,
            args: {
                id: {
                    type: graphql_1.GraphQLID
                }
            },
            resolve: BookResolvers_1.bookResolver
        },
        author: {
            type: AuthorType_1.default,
            args: {
                id: { type: graphql_1.GraphQLID }
            },
            resolve: AuthorResolvers_1.authorResolver
        }
    }
});
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery
});
