import React, { Component } from 'react';

/*const SearchBar = () => {
    return <input />;
};*/

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: 'Starting value' };
    }

    render() {
        return (
            <div>
                <input 
                    id="txtSearch"
                    value= {this.state.term}
                    onChange={this.inputChangeHandler} 
                />
                

            </div>
        )
    }

    inputChangeHandler = (event) => {
        this.setState({ term: event.target.value});
        console.log(this.state.term);
    }
}

export default SearchBar;