import React, {Component} from 'react'



export class Board extends Component {
    constructor(props) {
        super(props);

        this.createCells();
    }

    // nested for loop to create cells, cell locations i,j >> new Cell(i, j)
    // cell constructor

    createCells() {
        for (let i = 0; i < 20; i++) { // magic #
            for (let j = 0; j < 20; j++) {
                <Cell xPos={i} yPos={j}></Cell>
            }
        }
    }
}