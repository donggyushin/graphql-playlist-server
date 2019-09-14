import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'
import AuthorType from './AuthorType'
import { AuthorResponseType } from '../types/types'
import Authors from '../sampleData/author'
import _ from 'lodash'
import { authorResolverInBookType } from '../resolves/BookResolvers'

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve: authorResolverInBookType
        }
    })
})

export default BookType;