import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from "graphql";
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
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve: addAuthorMutation
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: GraphQLString }
            },
            resolve: addBookMutation
        }
    }
})

export default Mutation