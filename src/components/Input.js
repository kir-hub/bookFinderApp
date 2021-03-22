import React, {useState, useCallback, useEffect} from 'react'

export default function Input(props) {
    const {onloadHandler} = props
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const findByTitle = useCallback((e)=> setTitle(e.target.value),[])
    const findByAuthor = useCallback((e)=> setAuthor(e.target.value),[])
    
    return (
        <div>
            <input onChange={findByTitle} value={title} placeholder='title'/>
            <input onChange={findByAuthor} value={author} placeholder='author'/>
            <button onClick={onloadHandler(title, author)}> Search </button>
        </div>
    )
}
