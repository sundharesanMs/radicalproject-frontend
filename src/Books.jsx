import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Books = () => {
    const  {books,setBooks} = useState(''); 
    useEffect(()=>{
        axios.get('http:localhost:8085/') 
    },  [])
  return (
    <div>

        <h1>dfdf</h1>
    </div>
  )
}

export default Books