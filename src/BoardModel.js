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

export const boardModel = {
    createDataModel,
    getCellStates,
};