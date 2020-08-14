// 2-d array of ints or bools (cell states)
// cell components are told or ask for their state

let cellStates = new Array(5);

function createDataModel() {
    for (let i = 0; i < cellStates.length; i++) {
        cellStates[i] = new Array(5);
    }
}

function getCellStates() {
    return cellStates;
}

function getStateAtLoc(row, col) {
    return cellStates[row][col];
}

export const boardModel = {
    createDataModel,
    getCellStates,
    getStateAtLoc,
};