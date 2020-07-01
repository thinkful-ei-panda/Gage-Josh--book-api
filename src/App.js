import React from 'react';
import Navbar from './navbar/Navbar'
import Header from './Header/Header'
import BookList from './results/BookList'


/** fix so apiCall can make calls with both Search terms and filter .... gl*/

class App extends React.Component {
  
  state = {
      books : [] , 
      loading : false,
      filter : 'full' ,
      printType : 'all',
      searchTerm : '',
  }  
  
  

  handleSubmitAndCall = (e) => {
    e.preventDefault();
    console.log(this.state.searchTerm)
    const search = this.state.searchTerm;
    this.setState({loading : true})
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&fliter=${this.state.filter}&printType=${this.state.printType}&maxResults=10`
    if(this.state.searchTerm.length===0){
      this.setState({books : 'please enter a search term'})
    }else{
      
    fetch(url)
        .then( (res)=>{
          if(res.ok){
            return res.json();
          }else{
            throw Error(res.message)
          }
          })
        .then((res) =>
        this.setState({books: res.items,
                       searchTerm : '',
                       loading : false, 
        }))
        .catch((error) => 
        console.log(error),
        this.setState({loading : false})
        );
  }
}


handleFilterChange =(e)=>{
  e.preventDefault();
  const newState = {};
  newState[e.target.name] = e.target.value;
  this.setState(newState);
  
}


  
  
  render(){
      console.log(this.state.books)
    return (
      
      <main className='App'>
        <Header/>
        <Navbar
        term={this.state.searchTerm}
        handleFilterChange={this.handleFilterChange}
        handleSubmitAndCall={this.handleSubmitAndCall}
        />
        <BookList
        books={this.state.books}
        />
    </main>
    )
  };
}

export default App;