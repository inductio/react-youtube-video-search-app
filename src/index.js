import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from  './components/searchBar';

const API_KEY = 'AIzaSyD02p-qdObMx8p47iVQuRwLvYyxYiRJZCw';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

ReactDOM.render(
    <App/>, document.getElementsByClassName('container')[0]
);