import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
      padding: theme.spacing(2),
    },
    button: {
      marginTop: theme.spacing(1),
    },
  }));

export default function CombinationBox() {
    const classes = useStyles();
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');

    const handleFirstChange = (event) => {
        setFirst(event.target.value);
    };

    const handleSecondChange = (event) => {
        setSecond(event.target.value);
    };

    const handleThirdChange = (event) => {
        setThird(event.target.value);
    };

    return (
        <div className={classes.root}>
        <Grid container justify="center">
            <Grid item xs={12}>
            <h3>Select Cycle Data</h3>
            </Grid>
            <Grid item xs={12}>
            <Select
                labelId="first-label"
                id="first-select"
                value={first}
                onChange={handleFirstChange}
                displayEmpty
                fullWidth
            >
                <MenuItem value="" disabled>
                Type
                </MenuItem>
                <MenuItem value="Option1">Option 1</MenuItem>
                <MenuItem value="Option2">Option 2</MenuItem>
                <MenuItem value="Option3">Option 3</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={12}>
            <Select
                labelId="second-label"
                id="second-select"
                value={second}
                onChange={handleSecondChange}
                displayEmpty
                fullWidth
            >
                <MenuItem value="" disabled>
                Site
                </MenuItem>
                <MenuItem value="Option1">Option 1</MenuItem>
                <MenuItem value="Option2">Option 2</MenuItem>
                <MenuItem value="Option3">Option 3</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={12}>
            <Select
                labelId="third-label"
                id="third-select"
                value={third}
                onChange={handleThirdChange}
                displayEmpty
                fullWidth
            >
                <MenuItem value="" disabled>
                Date
                </MenuItem>
                <MenuItem value="Option1">Option 1</MenuItem>
                <MenuItem value="Option2">Option 2</MenuItem>
                <MenuItem value="Option3">Option 3</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={12} className={classes.button}>
            <Button variant="contained" color="primary">
                Confirm
            </Button>
            </Grid>
        </Grid>
        </div>
    );
}