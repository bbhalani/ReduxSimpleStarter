import React, { Component } from 'react';

/*const SearchBar = () => {
    return <input />;
};*/

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    
                    id="txtSearch"
                    value= {this.state.term}
                    onChange={event => this.inputChangeHandler(event.target.value)} 
                />
                

            </div>
        )
    }

    inputChangeHandler = (term) => {
        this.setState({ term});
        console.log(this.state.term);
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;