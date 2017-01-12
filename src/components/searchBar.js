import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            itemText: []
        };

        this.handleInput = this.handleInput.bind(this);
        this.callSearch = this.callSearch.bind(this);
        this.itemText = [];
    }

    handleInput(e) {
        this.setState({
            inputValue: e.target.value.trim()
        })
    }

    callSearch() {
        this._input.value = '';

        return this.props.onVideoSearch(this.state.inputValue);
    }

    render() {
        return (
            <div className="search-bar">
                <div>
                    <input ref={node => (this._input = node)} onChange={this.handleInput}/>
                    <button className="btn-small" onClick={this.callSearch}>Search videos...</button>
                </div>
                <div>
                    {this.state.itemText.map((value, index) => {
                        return (
                            <div className="history" key={index}>
                                {value}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };
}

export default SearchBar;