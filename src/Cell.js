import React, {Component} from 'react'

export class Cell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let bgColor = this.props.alive ? "black" : "white";
        return (
            <div style={{height: "30px", width: "30px", backgroundColor: bgColor}}></div>
        )
    }
}