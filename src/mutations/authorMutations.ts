import { AuthorResponseType } from "../types/types";
import Author from "../models/author";

export const addAuthorMutation = (parent, args): AuthorResponseType => {
    const { name, age } = args;
    const newAuthor = new Author({
        name,
        age
    })
    return newAuthor.save()
}