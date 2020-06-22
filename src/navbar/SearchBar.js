import React from 'react';

function SearchBar(props){
    const val = 
    return(
    <div>
        <form >
            <label for="search-box"/>
                <input type="text" id="search-box" placeholder="search"/>
                <button type="submit" onSubmit={props.submit()}>Search</button>
        </form>
    </div>
        
    )
}


export default SearchBar;