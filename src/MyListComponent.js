import React, {Component} from 'react';

export default class List extends Component {
    constructor() {
        super();
        this.state = {
            employees: [
            {Name:'satish' },
            {Name:'kumar' },
            {Name:'vivek' },
            {Name:'xyz' },
            {Name:'abc' }],
        }
    }

    render() {
        return(
            <div>
                <ul>
                    {this.state.employees.map((eachEmp, index) => {
                        return <li key={index}>{eachEmp.Name}</li>
                    })}
                </ul>
            </div>
        )
    }
}