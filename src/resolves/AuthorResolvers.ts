import { AuthorResponseType } from '../types/types'

export const authorResolver = (parent, args): AuthorResponseType => {
    const { id } = args;
    return {
        id,
        name: 'test',
        age: 26
    }
}