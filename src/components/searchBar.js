import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: 'Trololo'
        };

        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        return (
        <div>
            <input ref="inputElement" onChange={this.handleInput}/>
            <h1>
                {this.state.inputValue}
            </h1>
        </div>
        );
    };
}

export default SearchBar;