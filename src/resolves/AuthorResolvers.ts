import { AuthorResponseType, BookResponseType } from '../types/types'
import Authors from '../sampleData/author'
import _ from 'lodash'
import Books from '../sampleData/books';

export const authorResolver = (parent, args): AuthorResponseType => {
    const { id } = args;
    const authors = _.find(Authors, { id })
    return authors
}

export const booksResolverInAuthorType = (parent, args): [BookResponseType] => {
    const { id } = parent;
    const books = _.filter(Books, {
        authorId: id
    })
    return books
}