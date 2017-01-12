import React, { Component } from 'react';
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };

        this.callSearch = this.callSearch.bind(this);
    }

    callSearch(searchValue) {
        return this.props.onVideoSearch(searchValue);
    }

    render() {
        return (
            <div className="search-bar">
                <div>
                    <input onChange={e => this.callSearch(e.target.value)}/>
                </div>
            </div>
        );
    };
}

export default SearchBar;