"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var AuthorType_1 = __importDefault(require("../graphqlObjectTypes/AuthorType"));
var authorMutations_1 = require("./authorMutations");
var BookType_1 = __importDefault(require("../graphqlObjectTypes/BookType"));
var bookMutations_1 = require("./bookMutations");
var Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType_1.default,
            args: {
                name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                age: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) }
            },
            resolve: authorMutations_1.addAuthorMutation
        },
        addBook: {
            type: BookType_1.default,
            args: {
                name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                genre: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                authorId: { type: graphql_1.GraphQLString }
            },
            resolve: bookMutations_1.addBookMutation
        }
    }
});
exports.default = Mutation;
