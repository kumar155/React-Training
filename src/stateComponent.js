import React, {Component} from 'react';

export default class StateComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 5,
            name: 'satish',
            key: '',
            employees: [
                {Name:'satish' },
                {Name:'kumar' },
                {Name:'vivek' },
                {Name:'xyz' },
                {Name:'abc' }],
        };
    }
    render() {
        return(
            <div>
                <p>The State Count is: {this.state.count}</p>
                <ul>
                    {this.state.employees.map((eachEmp, index) => {
                        return <li>{eachEmp.Name}</li>
                    })}
                </ul>
            </div>
        );
    }
}
