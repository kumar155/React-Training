import React, { Component } from 'react';
import Background from './background';

export default class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            name : 'testName',
        }
    }
    changeName = () => {
        this.setState({name: 'newName'});
    }
    render() {
        return(
            <div>
                {this.state.name}
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}