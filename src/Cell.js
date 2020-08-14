import React, {Component} from 'react'



export class Cell extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <p>{this.props.row}, {this.props.col}</p>
        )
    }
}

// cell knows its location, queries model for the state at that location, updates its state to match