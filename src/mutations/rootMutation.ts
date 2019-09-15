import { GraphQLObjectType, GraphQLString, GraphQLInt, graphqlSync } from "graphql";
import AuthorType from "../graphqlObjectTypes/AuthorType";
import { addAuthorMutation } from "./authorMutations";
import BookType from "../graphqlObjectTypes/BookType";
import { addBookMutation } from './bookMutations'


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            resolve: addAuthorMutation
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: GraphQLString },
                genre: { type: GraphQLString },
                authorId: { type: GraphQLString }
            },
            resolve: addBookMutation
        }
    }
})

export default Mutation