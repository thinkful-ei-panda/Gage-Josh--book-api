import React from 'react'
import Book from './Book'

export default function BookList(props){
    return (
        <div className='book-list'>
            {
                props.books.map(b =>{
                    let priceInfo = '' 
                    if(b.saleInfo.listPrice){
                        priceInfo = b.saleInfo.listPrice.amount
                    }else {
                        priceInfo = 'not for sale'
                    }

                    let img = ''
                    if(b.volumeInfo.imageLinks){
                        img = b.volumeInfo.imageLinks.thumbnail
                    }else {
                        img = 'N/A'
                    }

                    let author = ''
                    if(b.volumeInfo.authors){
                        author = b.volumeInfo.authors
                    }else {
                        author = '*'
                    }

                    console.log(author)
                    return (

                    <Book
                    key={b.id}
                    img={img}
                    title={b.volumeInfo.title}
                    author={author}
                    price={priceInfo}
                    dis={b.volumeInfo.description}
                    />
                    )
                })
            }


        </div>
    )
}