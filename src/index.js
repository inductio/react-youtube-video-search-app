import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from  './components/searchBar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD02p-qdObMx8p47iVQuRwLvYyxYiRJZCw';

YTSearch({
    key: API_KEY,
    term: 'surfboards',
}, (data) => {
    console.log(data);
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
    }

    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementsByClassName('container')[0]
);