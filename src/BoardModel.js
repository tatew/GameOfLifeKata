import React, {Component} from "react";
import {Board} from "./Board";

export class BoardModel extends Component {


    constructor(props) {
        super(props);

        let cs = new Array(5);
        for (let i = 0; i < cs.length; i++) {
            cs[i] = new Array(5);
        }

        this.generateStartState(cs);

        this.state = {
            cellStates: cs
        };
    }

    getStateAtLoc(row, col) {
        console.log(row + ", " + col);
        return this.state.cellStates[row][col];
    }

    generateStartState(arr) {
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                arr[row][col] = (Math.random() <= 0.5);
            }
        }
    }

    updateCells = () => {
        let nextCellStates = new Array(5);
        for (let i = 0; i < nextCellStates.length; i++) {
            nextCellStates[i] = new Array(5);
        }

        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                const numAlive = this.calculateNumAlive(row, col);
                nextCellStates[row][col] = this.calcNewState(numAlive, this.state.cellStates[row][col]);
            }
        }
        this.setState({cellStates: nextCellStates});
    }

    calcNewState(numAlive, currCellAlive) {
        if (!currCellAlive && numAlive === 3) {
            return true;
        } else if (currCellAlive && (numAlive < 2 || numAlive > 3)) {
            return false;
        } else {
            return currCellAlive;
        }
    }

    calculateNumAlive(row, col) {
        let numberAlive = 0;
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (!(i < 0 || i > 4 || j < 0 || j > 4 || (i === row && j === col))) {
                    if (this.state.cellStates[i][j]) {
                        numberAlive++;
                    }
                }
            }
        }
        return numberAlive;
    }

    render() {
        return (
            <Board cellStates={this.state.cellStates} onClick={this.updateCells}/>
        )
    }
}