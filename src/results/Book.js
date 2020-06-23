import React from 'react';


//title = volumeInfo.title
//author = volumeInfo.map(a => a)
//price = saleInfo.retailPrice.amount
//img = volumeInfo.imageLinks.thumbnail
//dis = volumeInfo.description


    export default function Book(props) {

        const authors = props.volumeInfo.authors

       const authorList = authors.length === 1 ? authors : authors.map(a => 
                    `<li>${a}</li>`
        ) 



       return(
         <div>
                      {props.map(book =>

                    <div>
                        <p>{book.volumeInfo.title}</p>
                      <div>{authors.length === 1 ?  <p>{authorList}</p> : <ul>{authorList}</ul> }</div>
                      <p>{}</p>
                    </div>
                
                    )}
            </div>  
       ) 
        

        
            
        
    };

    