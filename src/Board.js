import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import {Cell} from "./Cell";

export class Board extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.cellStates);
    }

    createRows(rowNum) {
        return (
            <React.Fragment>
                <Grid item>
                    <Cell row={rowNum} col={0} alive={this.props.cellStates[rowNum][0]}/>
                </Grid>
                <Grid item>
                    <Cell row={rowNum} col={1} alive={this.props.cellStates[rowNum][1]}/>
                </Grid>
                <Grid item>
                    <Cell row={rowNum} col={2} alive={this.props.cellStates[rowNum][2]}/>
                </Grid>
                <Grid item>
                    <Cell row={rowNum} col={3} alive={this.props.cellStates[rowNum][3]}/>
                </Grid>
                <Grid item>
                    <Cell row={rowNum} col={4} alive={this.props.cellStates[rowNum][4]}/>
                </Grid>
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                <Grid container spacing={0}>
                    <Grid container item spacing={0}>
                        {this.createRows(0)}
                    </Grid>
                    <Grid container item spacing={0}>
                        {this.createRows(1)}
                    </Grid>
                    <Grid container item spacing={0}>
                        {this.createRows(2)}
                    </Grid>
                    <Grid container item spacing={0}>
                        {this.createRows(3)}
                    </Grid>
                    <Grid container item spacing={0}>
                        {this.createRows(4)}
                    </Grid>
                </Grid>
                <button onClick={this.props.onClick}>Click</button>
            </React.Fragment>
        );
    }
}