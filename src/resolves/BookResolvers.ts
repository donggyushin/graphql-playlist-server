import { BookResponseType, AuthorResponseType } from '../types/types'
import Books from '../sampleData/books'
import Authors from '../sampleData/author';
import _ from 'lodash'

export const bookResolver = (parent, args): BookResponseType => {
    // code to get data from db / other sources
    const { id } = args;
    const books = _.find(Books, { id })
    return books
}

export const authorResolverInBookType = (parent, args): AuthorResponseType => {
    const { authorId } = parent;
    const authors = _.find(Authors, { id: authorId })
    return authors
}