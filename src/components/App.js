import React from 'react'
import axios from 'axios'

export default function App() {
    console.log(1);
    const res = axios.get('https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?projection=lite&key=AIzaSyDQR90V3fE8VfBnUYlH6T8UCkBWcRcgNaM')
    console.log(res);

    return (
        <div>
            
        </div>
    )
}
