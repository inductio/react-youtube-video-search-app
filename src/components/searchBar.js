import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: 'Trololo',
            itemText: ['dsf', 'qwqdqwd', 'asdasdasd']
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
        <div>
            <div>
                <input ref={node => (this._input = node)} onChange={this.handleInput}/>
                <button onClick={this.pushItems}>add</button>
            </div>
            <div>
                {this.state.itemText.map((value, index) => {
                    return (
                        <div key={index}>
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