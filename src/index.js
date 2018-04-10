import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

// Create a new component.
// This component should produce some HTML.

const API_KEY = 'AIzaSyCti7LE4p4wtebqaa3on1szQgdIDgXCAg0'; 

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

// Take this Component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));