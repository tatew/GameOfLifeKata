import React, {Component} from 'react'
import {boardModel} from "./BoardModel";

export class Cell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let bgColor = this.props.alive ? "black" : "white";
        return (
            // <p>{this.props.alive.toString()}</p>
            <div style={{height: "30px", width: "30px", backgroundColor: bgColor}}></div>
        )
    }
}