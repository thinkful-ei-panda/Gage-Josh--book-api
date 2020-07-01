import React from 'react';


// img={b.volumeInfo.imageLinks.smallThumbnail}
// title={b.volumeInfo.title}
// author={b.volumeInfo.author}
// price={priceInfo}
// dis={b.volumeInfo.description}


    export default function Book(props) {

        const authors = props.author

       const authorList =  authors.length === 1 ? <p>{authors[0]}</p>
       : <ul>
            {authors.map(a => 
                    <li>{a}</li>
        )} </ul> ;

                

       return(
         <div key={props.key}>
             <img src={props.img} alt={props.title} />
              <h5>{props.title}</h5>
              {authorList}
              <p>{props.price.toString()}</p>
              <p>{props.dis}</p>
        </div>  
       ) 
};

    