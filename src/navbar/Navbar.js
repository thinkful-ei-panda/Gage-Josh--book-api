import React from 'react';
import Filter from './Filter';
import SearchBar from './SearchBar';

   export default function Navbar(props){

        return(
            <div className="Nav-bar">
                <Filter
                filter={props.filter}
                />
                <SearchBar
                submit={props.submit}
                />
                
            </div>
        );
    }


