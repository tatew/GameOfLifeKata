import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import {Cell} from "./Cell";

export class Board extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.cellStates);
    }

    createRow(row) {
        return (
            <React.Fragment>
                {row.map((isAlive, i) =>
                    <Grid item key={i}>
                        <Cell alive={isAlive}/>
                    </Grid>
                )}
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                <Grid container spacing={0}>
                    {this.props.cellStates.map((row, i) =>
                        <Grid container item spacing={0} key={i}>
                            {this.createRow(row)}
                        </Grid>
                    )}
                </Grid>
                <button onClick={this.props.onClickStart}>Start</button>
                <button onClick={this.props.onClickStop}>Stop</button>
            </React.Fragment>
        );
    }
}