import React from 'react';
import Filter from './Filter';
import SearchBar from './SearchBar';

   export default function Navbar(props){

        return(
            <div className="Nav-bar">
                <SearchBar
                submit={props.submit}
                />
                <Filter
                filter={props.filter}
                />
                
            </div>
        );
    }


