// don't forget edge cases

import {boardModel} from "./BoardModel"

let states = boardModel.getCellStates();

function updateCells() {
    for (let row = 0; row < 5; row++)
    {
        for (let col = 0; col < 5; col++)
        {
            const numAlive = boardModel.calcNumAlive(row, col);
            boardModel.setState(row, col, calcNewState(numAlive, boardModel.getStateAtLoc(row, col)));
        }
    }
}

function calcNewState(numAlive, currCellAlive) {
    if (!currCellAlive && numAlive == 3) {
        return true;
    } else if (currCellAlive && (numAlive < 2 || numAlive > 3)) {
        return false;
    } else {
        return currCellAlive;
    }
}
