"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var BookType = new graphql_1.GraphQLObjectType({
    name: 'Book',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        genre: { type: graphql_1.GraphQLString }
    }); }
});
var RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: {
                    type: graphql_1.GraphQLString
                }
            },
            resolve: function (parent, args) {
                // code to get data from db / other sources
                var id = args.id;
                return {
                    id: id,
                    name: 'test',
                    genre: 'test'
                };
            }
        }
    }
});
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery
});
