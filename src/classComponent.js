import React, { Component } from 'react';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            name: '',
        }
        console.log(this.props);
    }
    render() {
        return(
            <div>
                <div>
                    HI ...
                </div>
                <div>
                   HI ...
                </div>
                {this.props.name}
                {this.props.userName}
            </div>
        );
    }
}

