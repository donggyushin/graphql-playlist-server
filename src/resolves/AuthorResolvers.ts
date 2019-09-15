import { AuthorResponseType, BookResponseType } from '../types/types'
import Authors from '../sampleData/author'
import _ from 'lodash'
import Books from '../sampleData/books';
import Author from '../models/author';
import Book from '../models/book';

export const allAuthorsResolver = async (parent, args): Promise<AuthorResponseType[]> => {

    try {
        const allAuthors = await Author.find()
        return allAuthors;

    } catch (err) {
        return null
    }

}

export const authorResolver = async (parent, args): Promise<AuthorResponseType> => {
    const { id } = args;
    try {
        const author = await Author.findById(id)
        return author

    } catch (err) {
        return null
    }
}

export const booksResolverInAuthorType = async (parent, args): Promise<BookResponseType[]> => {
    const { id } = parent;
    try {
        const books = await Book.find({ authorId: id })
        return books
    } catch (err) {
        return null
    }
}