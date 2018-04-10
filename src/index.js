import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

// Create a new component.
// This component should produce some HTML.

const API_KEY = 'AIzaSyCti7LE4p4wtebqaa3on1szQgdIDgXCAg0'; 



class App extends Component {
    constructor(props){
        super(props);
        this.state ={ videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            //this.setState({ videos: videos });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

// Take this Component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));