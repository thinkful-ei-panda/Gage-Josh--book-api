import React from 'react';

class App extends React.Component {
  
  state = {
      books : []
  }


  /**https://developers.google.com/books/docs/v1/reference/volumes/list?apix_params=%7B%22filter%22%3A%22ebooks%22%2C%22printType%22%3A%22ALL%22%2C%22q%22%3A%22harry%22%7D#http-request**/
  
  
  searchBooks (searchTerms) {

    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&maxResults=${10}`
      fetch(url)
        .then( (res)=>
        res.json())
        .then((res) =>
        this.setState({books: res.items}))
  }
  
  
  render(){
    return (
      <main className='App'>
        <Header/>
        <Navbar
        submit={this.searchBooks}
        />
        <Books/>
    </main>
    )
  };
}

export default App;