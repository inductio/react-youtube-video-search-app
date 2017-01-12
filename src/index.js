import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from  './components/searchBar';
import VideoList from  './components/VideoList';
import VideoDetail from  './components/VideoDetail';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD02p-qdObMx8p47iVQuRwLvYyxYiRJZCw';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            searchValue: 'js',
        };
        this.getVideos = this.getVideos.bind(this);
    }

    componentDidMount() {
        this.getVideos('');
    }

    getVideos(term) {
        YTSearch({key: API_KEY, term},
            ( videos ) =>
            {this.setState({
                videos,
                selectedVideo: videos[0]
            })}
        );
    }

    render() {
        const videoSearch = _.debounce((searchValue) => {this.getVideos(searchValue)}, 500);
        return (
            <div>
                <SearchBar onVideoSearch={videoSearch}
                />
                <VideoDetail
                    video={this.state.selectedVideo}
                />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}



ReactDOM.render(
    <App/>, document.getElementsByClassName('container')[0]
);