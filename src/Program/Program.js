import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '2.0em'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    typography: {
        fontWeight: "bold",
        textAlign: "left"
    }
}));

const Program = (props) => { 
    const classes = useStyles();
    return (
    <div id="program" className="program">
        <h2>Create New Workout:</h2>
        <form className="main-form" autoComplete="off">
            <Typography variant="h6" gutterBottom className={classes.typography}>
                Format:
            </Typography>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="type"
                        label="Workout Type"
                        placeholder="Workout Type"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="rounds"
                        label="Rounds"
                        placeholder="Rounds"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="time"
                        label="Time / Cap"
                        placeholder="Time / Cap"
                        margin="normal"
                    />
                </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom className={classes.typography}>
                Movements:
            </Typography>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="reps"
                        label="Number of Reps"
                        placeholder="Number of Reps"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="excercise"
                        label="Excersice"
                        placeholder="Excersice"
                        margin="normal"
                    />
                </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom className={classes.typography}>
                RX Weight:
            </Typography>
            <Grid container className={classes.root} spacing={4}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="weight"
                        label="Weight"
                        placeholder="Weight"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="equipment"
                        label="Equipment"
                        placeholder="Equipment"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="gender"
                        label="Gender"
                        placeholder="Gender"
                        margin="normal"
                    />
                </Grid>
            </Grid>
        </form>
    </div>
    )}
export default Program;
