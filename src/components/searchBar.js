import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            itemText: []
        };

        this.handleInput = this.handleInput.bind(this);
        this.pushItems = this.pushItems.bind(this);
        this.itemText = [];
    }

    componentDidUpdate() {

    }

    handleInput(e) {
        this.setState({
            inputValue: e.target.value.trim()
        })
    }

    pushItems() {
        this.itemText.push(<div>{this.state.inputValue}</div>);
        this.setState({
            itemText: this.itemText,
            inputValue: ''
        });

        this._input.value = '';
    }

    render() {
        return (
            <div className="search-bar">
                <div>
                    <input ref={node => (this._input = node)} onChange={this.handleInput}/>
                    <button className="btn-small" onClick={this.pushItems}>Search videos...</button>
                </div>
                <div>
                    {this.state.inputValue
                        ? <h4>Search history:</h4>
                        : null
                    }
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