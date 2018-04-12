import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-details';
import videoDetails from './components/video-details';

// Create a new component.
// This component should produce some HTML.

const API_KEY = 'AIzaSyCti7LE4p4wtebqaa3on1szQgdIDgXCAg0'; 



class App extends Component {
    constructor(props){
        super(props);
        this.state ={ 
            videos: [],
            selectedVideo: null
        };
        this.videoSearch("surfboards")
    }

    videoSearch = term =>{
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
            //this.setState({ videos: videos });
        });
    }
    
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} 
                />
            </div>
        )
    }
}

// Take this Component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));