import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';



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

    createRows(rowNum) {
        <React.Fragment>
            <Grid item>
                <Cell xPos={0} yPos={rowNum}></Cell>
            </Grid>
            <Grid item>
                <Cell xPos={1} yPos={rowNum}></Cell>
            </Grid>
            <Grid item>
                <Cell xPos={2} yPos={rowNum}></Cell>
            </Grid>
            <Grid item>
                <Cell xPos={3} yPos={rowNum}></Cell>
            </Grid>
            <Grid item>
                <Cell xPos={4} yPos={rowNum}></Cell>
            </Grid>
        </React.Fragment>
    }

    render() {
        return (
            <Grid container>
                <Grid container item>
                    {this.createRows(0)}
                </Grid>
            </Grid>
        );
    }
}