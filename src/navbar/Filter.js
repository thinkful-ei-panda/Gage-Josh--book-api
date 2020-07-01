import React from 'react';

    export default function Filter (props){


            return(
                <div>
                        <label htmlFor="type-of-book" ></label>
                        <select id="type-of-book" name="filter" className="type-of-book" onChange={(e) => props.handleFilterChange(e)}>
                            <option value="ebooks" >ebooks</option>
                            <option value="free-ebooks" >free-ebooks</option>
                            <option value="full" >full</option>
                            <option value="paid-ebooks" >paid-ebooks</option>
                            <option value="partial" >partial</option>
                        </select>
                        <label htmlFor="print-type" ></label>
                        <select id="print-type" name="printType" className="print-type" onChange={(e) => props.handleFilterChange(e)}>
                            <option value="all" >all</option>
                            <option value="books" >books</option>
                            <option value="magazines" >magazines</option>
                        </select>

                </div>
            )
         }

