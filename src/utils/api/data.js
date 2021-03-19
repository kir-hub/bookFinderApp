import axios from 'axios'
import apiKey from '../../../key'

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='
const BOOK_TITLE = 'string'
const AUTHOR = `+inauthor:${name}`//добавить проверку на наличие нескольких условий
const KEY = `&key=${apiKey}`

// const getBooks = (book_title, author) => axios.get(`https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?projection=lite&key=${KEY}`)
const getBooks = (book_title, author) => axios.get(`${BASE_URL}${book_title}${author}${KEY}`)

export default getBooks;
