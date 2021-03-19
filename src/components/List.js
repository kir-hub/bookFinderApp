import React from 'react'
import Input from './Input'

export default function List() {

    const onloadHandler = (value)=>{
        // return jsx with value
    }
    return (
        <div>
            <Input onloadHandler={onloadHandler} />    
        </div>
    )
}
