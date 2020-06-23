import React from 'react';

 class SearchBar extends React.Component{

    state= {
        term : ''
    };
    
    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    handleTextbox = (e) => {
        e.preventDefault();
        this.props.submit(this.state.term);
        this.setState({term : ''});

    }
        render(){
            return(
                <div>
                    <form
                    onSubmit={this.handleTextbox} 
                    className='submit-form'>
                        <label for="search-box"/>Search:
                            <input
                            onChange={this.handleChange} 
                            value={this.state.term} 
                            type="text" 
                            name="term"
                            />
                            <button type="submit">Search</button>
                    </form>
                </div>
                    
                )
        }
    
}


export default SearchBar;