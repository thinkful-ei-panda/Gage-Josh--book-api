import React from 'react';
import Filter from './Filter';


   export default function Navbar(props){
    
        
        return(
            <div className="Nav-bar">
                    <form
                    onSubmit={ (e)=> props.handleSubmitAndCall(e)} 
                    className='submit-form'>
                        <label htmlFor="search-box"/>Search:
                            <input
                            onChange={ (e) => props.handleFilterChange(e)} 
                            value={props.term} 
                            id='submit-form'
                            type="text" 
                            name="searchTerm"
                            />
                            <Filter
                                handleFilterChange={props.handleFilterChange}
                                />
                            <button type="submit">Search</button>
                    </form>
            </div>
        );
    }


