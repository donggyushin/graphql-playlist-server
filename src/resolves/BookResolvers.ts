import { BookResponseType } from '../types/types'

export const bookResolver = (parent, args): BookResponseType => {
    // code to get data from db / other sources
    const { id } = args;
    return {
        id,
        name: 'test',
        genre: 'test'
    }
}