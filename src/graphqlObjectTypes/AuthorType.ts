import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'
import BookType from './BookType'
import { booksResolverInAuthorType } from '../resolves/AuthorResolvers'
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve: booksResolverInAuthorType
        }
    })
})

export default AuthorType