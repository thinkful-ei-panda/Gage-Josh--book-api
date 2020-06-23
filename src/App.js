import React from 'react';
import Navbar from './navbar/Navbar'
import Header from './header/Header'
import Results from './results/Booklist'

class App extends React.Component {
  
  state = {
      books : [] , 
      loading : false,
  }


  /**https://developers.google.com/books/docs/v1/reference/volumes/list?apix_params=%7B%22filter%22%3A%22ebooks%22%2C%22printType%22%3A%22ALL%22%2C%22q%22%3A%22harry%22%7D#http-request**/
  
  
  searchBooks = (searchTerms)=> {

    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&maxResults=${10}`
      fetch(url)
        .then( (res)=>
        res.json())
        .then((res) =>
        this.setState({books: res.items}))
  }

  

  filterBy(obj){
    const filterVal = {
      filter : obj.filter ,
      printType : obj.printType,
    }
    return filterVal; 
  }

  // apiCall(){
    
  // }
  
  
  render(){
    return (
      <main className='App'>
        <Header/>
        <Navbar
        filter={this.filterBy}
        submit={this.searchBooks}
        />
        {/* <Books/> */}
    </main>
    )
  };
}

export default App;