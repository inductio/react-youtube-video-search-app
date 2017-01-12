import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from  './components/searchBar';
import VideoList from  './components/VideoList';

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
            term: 'javascript'
        }, ( videos ) =>
            {this.setState({ videos })}
        );
    }

    render() {

        return (
            <div>
                <SearchBar/>
                <VideoList videos={ this.state.videos } />
            </div>
        );
    }
}



ReactDOM.render(
    <App/>, document.getElementsByClassName('container')[0]
);