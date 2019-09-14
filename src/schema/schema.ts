import { GraphQLObjectType, GraphQLSchema, GraphQLID } from 'graphql'
import BookType from '../graphqlObjectTypes/BookType';
import AuthorType from '../graphqlObjectTypes/AuthorType'
import { bookResolver } from '../resolves/BookResolvers'
import { authorResolver } from '../resolves/AuthorResolvers';




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
        }
    }
})

export default new GraphQLSchema({
    query: RootQuery
})