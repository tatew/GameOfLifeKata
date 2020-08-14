import {boardModel} from "./BoardModel";

it('zero neighbors', () => {
    let cellStates = [
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    boardModel.setCurrentBoardState(cellStates);
    expect(boardModel.calculateNumAlive(0, 0)).toBe(0);
    expect(boardModel.calculateNumAlive(0, 1)).toBe(1);
});

it('one neighbors', () => {
    let cellStates = [
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    boardModel.setCurrentBoardState(cellStates);
    expect(boardModel.calculateNumAlive(0, 1)).toBe(1);
});

it('two neighbors', () => {
    let cellStates = [
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    boardModel.setCurrentBoardState(cellStates);
    expect(boardModel.calculateNumAlive(1, 1)).toBe(2);
});

it('three neighbors', () => {
    let cellStates = [
        [1, 1, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    boardModel.setCurrentBoardState(cellStates);
    expect(boardModel.calculateNumAlive(1, 1)).toBe(3);
});

it('four neighbors', () => {
    let cellStates = [
        [1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    boardModel.setCurrentBoardState(cellStates);
    expect(boardModel.calculateNumAlive(1, 1)).toBe(4);
});

it('five neighbors', () => {
    let cellStates = [
        [1, 1, 1, 0, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    boardModel.setCurrentBoardState(cellStates);
    expect(boardModel.calculateNumAlive(1, 1)).toBe(5);
});

it('six neighbors', () => {
    let cellStates = [
        [1, 1, 1, 0, 0],
        [1, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    boardModel.setCurrentBoardState(cellStates);
    expect(boardModel.calculateNumAlive(1, 1)).toBe(6);
});

it('seven neighbors', () => {
    let cellStates = [
        [1, 1, 1, 0, 0],
        [1, 0, 1, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    boardModel.setCurrentBoardState(cellStates);
    expect(boardModel.calculateNumAlive(1, 1)).toBe(7);
});

it('non neighbors', () => {
    let cellStates = [
        [1, 1, 1, 0, 0],
        [1, 0, 1, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    boardModel.setCurrentBoardState(cellStates);
    expect(boardModel.calculateNumAlive(3, 3)).toBe(0);
});

it('eight neighbors', () => {
    let cellStates = [
        [1, 1, 1, 0, 0],
        [1, 0, 1, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    boardModel.setCurrentBoardState(cellStates);
    expect(boardModel.calculateNumAlive(1, 1)).toBe(8);
});