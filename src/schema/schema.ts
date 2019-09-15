import { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLList } from 'graphql'
import BookType from '../graphqlObjectTypes/BookType';
import AuthorType from '../graphqlObjectTypes/AuthorType'
import { bookResolver, allBookResolver } from '../resolves/BookResolvers'
import { authorResolver, allAuthorsResolver } from '../resolves/AuthorResolvers';
import Mutation from '../mutations/rootMutation';




const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve: bookResolver
        },
        author: {
            type: AuthorType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: authorResolver
        },
        books: {
            type: new GraphQLList(BookType),
            resolve: allBookResolver
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve: allAuthorsResolver
        }
    }
})

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})