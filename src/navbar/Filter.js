import React from 'react';

    export default class Filter extends React.Component(props){
        
        state = {
            filter : 'full' ,
            printType : 'all',
        }



         handleFilterChange =(e)=>{
             e.preventDefault();
            this.setState({[e.target.name] :e.target.value})
            this.props.filter(this.state)
         }

         render(){

            return(
                <div>
                    <form>
                        <label for="type-of-book" ></label>
                        <select id="type-of-book" name="filter" className="type-of-book" onChange={this.handleFilterChange}>
                            <option value="ebooks" >ebooks</option>
                            <option value="free-ebooks" >free-ebooks</option>
                            <option value="full" >full</option>
                            <option value="paid-ebooks" >paid-ebooks</option>
                            <option value="partial" >partial</option>
                        </select>
                        <label for="print-type" ></label>
                        <select id="print-type" name="printType" className="print-type" onChange={this.handleFilterChange}>
                            <option value="all" >all</option>
                            <option value="books" >books</option>
                            <option value="magazines" >magazines</option>
                        </select>
                    </form>
                </div>
            )
         }

}