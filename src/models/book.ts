import mongoose from '../mongoose/mongoose';

const BookSchema = new mongoose.Schema({
    name: String,
    genre: String,
    authorId: String
})

const Book = mongoose.model('Book', BookSchema)

export default Book;