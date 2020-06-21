import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import _ from 'lodash';

import SearchBar  from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_list_item';
import VideoDetails from './components/video_detail';
const API_KEY = 'AIzaSyCsjZCOgC_hdB1ZCZYAvJPTwEY8ICK8VWc';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {videos: [], selectedVideo: null};

        this.videoSearch('songs');
    }
    
    videoSearch(term) {

        YTSearch({ key: API_KEY, term: term}, (data) =>  {
            this.setState({ videos: data, selectedVideo: data[0]});
        });

    }

    
    
    render () {
        const videoSearch = _.debounce((term) => {this.videoSearch(term), 300});
        
        return (
            <div>
                <SearchBar  onSearchTermChange={videoSearch }/>
                <VideoDetails video= {this.state.selectedVideo }/>
                <hr></hr>
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}


                
                    videos={ this.state.videos }/>
            </div>

        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));