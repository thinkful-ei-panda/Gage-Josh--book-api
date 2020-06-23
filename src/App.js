import React from 'react';
import Navbar from './navbar/Navbar'
import Header from './Header/Header'
import TemplateHold from './template/Books'

class App extends React.Component {
  
  state = {
      books : [] , 
      loading : false,
  }  

  componentDidMount(){
    this.searchBooks('ishmael');
  }
  
  searchBooks = (searchTerms)=> {

    // const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&maxResults=${10}`
        // fetch(url)
        //   .then( (res)=>{
        //     if(res.ok){
        //       return res.json();
        //     }else{
        //       throw Error(res.message)
        //     }
        //     })
        //   .then((res) =>
        //   this.setState({books: res.items}))
        //   .catch((error) => 
        //   console.log(error)
        //   );
  }

  

  filterBy(obj){
    const filterVal = {
      filter : obj.filter ,
      printType : obj.printType,
    }
    return filterVal; 
  }

  apiCall(f,s){
    const url = `https://www.googleapis.com/books/v1/volumes?q=${s}&fliter=${f.filter}&printType=${f.printType}&maxResults=${10}`
    fetch(url)
        .then( (res)=>{
          if(res.ok){
            return res.json();
          }else{
            throw Error(res.message)
          }
          })
        .then((res) =>
        this.setState({books: res.items}))
        .catch((error) => 
        console.log(error)
        );


  }
  
  
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