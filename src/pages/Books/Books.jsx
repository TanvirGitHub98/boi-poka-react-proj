import React, { useEffect, useState } from 'react'
import Book from '../Book/Book'

const Books = ({booksData}) => {
    console.log(booksData)
    const [allBooks,setAllBooks]=useState([])
    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //     })
    // },[])

    //aivabe o loader diye korte pari

  return (
    <div>
        <h1 className='text-3xl font-bold text-center m-3'>Books</h1>
        <div className='grid grid-cols-1 md: grid-cols-3 gap-4'>
            {
                booksData.map((singleBook)=> <Book key={singleBook.bookId} singleBook={singleBook} ></Book>)
            }
        </div>
    </div>
  )
}

export default Books