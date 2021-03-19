import React, {useState, useCallback, useEffect} from 'react'
import getBooks from '../utils/api/data'

export default function Input(props) {
    const {onloadHandler} = props
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [data, setData] = useState('')

    const fetchBooks =async(title, author)=>()=>{
        try {
            const response = await getBooks(title, author)
            console.log(response);
            // setData(response) 
        } catch (e) {
            console.error(e);
        }
    }
    const findByTitle = useCallback((e)=> setTitle(e.target.value),[])
    const findByAuthor = useCallback((e)=> setAuthor(e.target.value),[])
    const searchHandler = useCallback((title, author)=> ()=>{
        getBooks(title, author)
    },[])
    useEffect(()=>{

    },[])
    
    return (
        <div>
            <input onChange={findByTitle} value={title}/>
            <input onChange={findByAuthor} value={author}/>
            <button onClick={fetchBooks(title, author)}> Search </button>
        </div>
    )
}
