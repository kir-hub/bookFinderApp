import axios from 'axios'
import apiKey from '../../../key'

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='
const KEY = `&key=&key=${apiKey}`

const getBooks = (book_title, author) => axios.get(`${BASE_URL}${book_title}${author && '+inauthor:'+author}${KEY}`)
export default getBooks;
