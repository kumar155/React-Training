import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Background extends Component {
    constructor() {
        super();
        this.state= {
            name: 'background component',
        }
    }
    changeName = () => {
        this.setState({state: 'name changed to new name'});
    }
    render() {
        return(
            <div>
                {this.state.name}                
            </div>
        );
    }
}