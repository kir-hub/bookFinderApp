import React, {useState, useEffect, useMemo} from 'react'
import Input from './Input'
import getBooks from '../utils/api/data'

export default function List() {

    const [data, setData] = useState('')

    const fetchBooks =(title, author)=> async()=>{
        try {
            const response = await getBooks(title, author)
            const {data: {items =[]} } = response || {}
            const books = items || []
            setData([...books])
        } catch (e) {
            console.error(e);
        }
    }
    
    const getPreview = useMemo(()=>{
        const arr = []
        if(data){
        for (let i = 0; i <= data.length - 1; i++){
            let item
            if(data[i].volumeInfo){
                const [] = data
                item = data && {
                    title: data[i].volumeInfo.title,
                    author: data[i].volumeInfo.authors ? data[i].volumeInfo.authors[0] : '-',
                    publisher: data[i].volumeInfo.publisher,
                    dateOfPublish: data[i].volumeInfo.publishedDate,
                    description: data[i].volumeInfo.description,
                    id: data[i].id,
                    link: data[i].volumeInfo.infoLink,
                    img: data[i].volumeInfo.imageLinks.smallThumbnail
                }
                arr.push(item)
            }
        }
    }
    return arr;
    });
    
    useEffect(()=>{
        getPreview
    },[data])

    return (
        <div>
            <Input onloadHandler={fetchBooks} /> 
            <ul>{getPreview.map((item)=>(
            <li key={item.id}>
                <div>
                    <img src={item.img} alt={item.title}/>
                    <h1>{item.title}</h1>
                    <h3>{item.author}</h3>
                    <p>publisher {item.publisher || 'none'}</p>
                    <p>{item.dateOfPublish}</p>
                    <p>{item.description}</p>
                    <a href={item.link}>{item.link}</a>
                </div>
            </li> ))} </ul>
        </div>
    )
}
