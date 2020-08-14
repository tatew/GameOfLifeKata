import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import {Cell} from "./Cell";




export class Board extends Component {
    constructor(props) {
        super(props);
    }

    // nested for loop to create cells, cell locations i,j >> new Cell(i, j)
    // cell constructor

    // createCells() {
    //     for (let i = 0; i < 20; i++) { // magic #
    //         for (let j = 0; j < 20; j++) {
    //
    //                 <Cell xPos={i} yPos={j}></Cell>
    //         }
    //     }
    // }

    createRows(rowNum) {
        return (
            <React.Fragment>
                <Grid item>
                    <Cell row={rowNum} col={0} state={0}></Cell>
                </Grid>
                <Grid item>
                    <Cell row={rowNum} col={1} state={0}></Cell>
                </Grid>
                <Grid item>
                    <Cell row={rowNum} col={2} state={0}></Cell>
                </Grid>
                <Grid item>
                    <Cell row={rowNum} col={3} state={0}></Cell>
                </Grid>
                <Grid item>
                    <Cell row={rowNum} col={4} state={0}></Cell>
                </Grid>
            </React.Fragment>
        )
    }

    render() {
        return (
            <Grid container spacing={3}>
                <Grid container item spacing={3}>
                    {this.createRows(0)}
                </Grid>
                <Grid container item spacing={3}>
                    {this.createRows(1)}
                </Grid>
                <Grid container item spacing={3}>
                    {this.createRows(2)}
                </Grid>
                <Grid container item spacing={3}>
                    {this.createRows(3)}
                </Grid>
                <Grid container item spacing={3}>
                    {this.createRows(4)}
                </Grid>
            </Grid>
        );
    }
}