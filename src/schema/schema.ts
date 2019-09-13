import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql'
import { BookResponseType } from '../types/types';

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parent, args): BookResponseType {
                // code to get data from db / other sources
                const { id } = args;
                return {
                    id,
                    name: 'test',
                    genre: 'test'
                }
            }
        }
    }
})

export default new GraphQLSchema({
    query: RootQuery
})