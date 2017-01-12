import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from  './components/searchBar';
import VideoList from  './components/VideoList';
import VideoDetail from  './components/VideoDetail';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD02p-qdObMx8p47iVQuRwLvYyxYiRJZCw';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
        YTSearch({
            key: API_KEY,
            term: 'react js'
        }, ( videos ) =>
            {this.setState({ videos })}
        );
    }

    render() {

        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={ this.state.videos } />
            </div>
        );
    }
}



ReactDOM.render(
    <App/>, document.getElementsByClassName('container')[0]
);