import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '2.0em'
    },
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120,
    },
    button: {
      marginTop: theme.spacing(3),
      marginRight: "inherit"
    },
    formButton: {
        marginBottom: '3.0em'
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
            {/* TODO:Separate the containers below into their own Components. */}
            <Typography variant="h6" gutterBottom className={classes.typography}>
                Format:
            </Typography>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12} sm={4}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="type">Workout Type</InputLabel>
                        <Select
                        //value={values.age}
                        //onChange={handleChange}
                        inputProps={{
                            name: 'type',
                            id: 'type',
                        }}
                        >
                        <MenuItem value={10}>For Time</MenuItem>
                        <MenuItem value={20}>AMARAP</MenuItem>
                        <MenuItem value={30}>EMOM</MenuItem>
                        </Select>
                    </FormControl>
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
                <Grid item xs={12} sm={1}>
                    <Button variant="contained" className={classes.button}>
                        ADD
                    </Button>
                </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom className={classes.typography}>
                RX Weight:
            </Typography>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="weight"
                        label="Weight"
                        placeholder="Weight"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select
                        //value={values.age}
                        //onChange={handleChange}
                        inputProps={{
                            name: 'gender',
                            id: 'gender',
                        }}
                        >
                        <MenuItem value={10}>Male</MenuItem>
                        <MenuItem value={20}>Female</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <Button variant="contained" className={classes.button}>
                        ADD
                    </Button>
                </Grid>
            </Grid>
            <Grid className={classes.formButton} item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    //onClick={}
                    className={classes.button}
                  >
                    Save
                </Button>
            </Grid>
        </form>
    </div>
    )}
export default Program;
