import { BookResponseType, AuthorResponseType } from '../types/types'
import Books from '../sampleData/books'
import Authors from '../sampleData/author';
import _ from 'lodash'
import Book from '../models/book';
import Author from '../models/author';

export const allBookResolver = async (parent, args): Promise<BookResponseType[]> => {
    try {
        const books = await Book.find()
        return books
    } catch (err) {
        return null
    }
}

export const bookResolver = async (parent, args): Promise<BookResponseType> => {
    // code to get data from db / other sources
    const { id } = args;
    try {
        const book = await Book.findById(id)
        return book
    } catch (err) {
        return null
    }
}

export const authorResolverInBookType = (parent, args): AuthorResponseType => {
    const { authorId } = parent;
    const author = Author.findById(authorId)
    return author
}