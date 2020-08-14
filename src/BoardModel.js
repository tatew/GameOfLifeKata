import React, {Component} from "react";
import {Board} from "./Board";

const BOARD_SIZE = {
    rows: 10,
    cols: 10
};

export class BoardModel extends Component {
    constructor(props) {
        super(props);

        this.intervalHandle = null;

        let cs = new Array(BOARD_SIZE.rows);
        for (let i = 0; i < cs.length; i++) {
            cs[i] = new Array(BOARD_SIZE.cols);
        }

        this.generateStartState(cs);

        this.state = {
            cellStates: cs
        };
    }

    generateStartState(arr) {
        for (let row = 0; row < BOARD_SIZE.rows; row++) {
            for (let col = 0; col < BOARD_SIZE.cols; col++) {
                arr[row][col] = (Math.random() <= 0.5);
            }
        }
    }

    updateCells = () => {
        let nextCellStates = new Array(BOARD_SIZE.rows);
        for (let i = 0; i < nextCellStates.length; i++) {
            nextCellStates[i] = new Array(BOARD_SIZE.cols);
        }

        for (let row = 0; row < BOARD_SIZE.rows; row++) {
            for (let col = 0; col < BOARD_SIZE.cols; col++) {
                const numAlive = this.calculateNumAlive(row, col);
                nextCellStates[row][col] = this.calcNewState(numAlive, this.state.cellStates[row][col]);
            }
        }
        this.setState({cellStates: nextCellStates});
    };

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
                if (!(i < 0 || i > BOARD_SIZE.rows - 1 || j < 0 || j > BOARD_SIZE.cols - 1 || (i === row && j === col))) {
                    if (this.state.cellStates[i][j]) {
                        numberAlive++;
                    }
                }
            }
        }
        return numberAlive;
    }

    startGame = () => {
        this.intervalHandle = setInterval(this.updateCells, 250);
    };

    stopGame = () => {
        clearInterval(this.intervalHandle);
    };

    render() {
        return (
            <Board cellStates={this.state.cellStates} onClickStart={this.startGame} onClickStop={this.stopGame}/>
        )
    }
}