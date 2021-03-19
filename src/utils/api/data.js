import axios from 'axios'

console.log(1);
const res = axios.get('https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?projection=lite&key=AIzaSyDQR90V3fE8VfBnUYlH6T8UCkBWcRcgNaM')
console.log(res);
