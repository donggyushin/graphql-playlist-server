import { BookResponseType } from '../types/types'
import Book from '../models/book'
export const addBookMutation = (parent, args): BookResponseType => {
    const {
        name,
        genre,
        authorId
    } = args;
    const newBook = new Book({
        name,
        genre,
        authorId
    })
    return newBook.save()
}