
import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as IncrementActions from './actions/ComponentActions';

export class ReactReduxComponent extends Component {
    constructor(){
        super();
        this.state = {
            Count : 0,
        };
    }
    render() {
        return(
            <div>
                <br/>
                <br/>
                <button onClick={this.OnIncrement}>Increment Count</button>
                <p>Present Count Value: {this.props.PresentCount}</p>
            </div>
        );
    }
    
    OnIncrement = () => {
        return this.props.IncrementAction();
    }
}

const mapStateToProps = (state) => ({
    PresentCount: state.CountReducer,
}); 
  
const mapDispatchToProps = (dispatch) => ({
    IncrementAction: () => dispatch(IncrementActions.IncrementCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxComponent);