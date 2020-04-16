import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  column: {
      display: "flex",

  }
}));

const randomTime1 = () => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes()+ Math.floor(Math.random() * 20)
    if(m>59){
        m = m-60
        h++
    }
    if(h>=12){
        h = h-12
    }
    return(`${h}:${m}PM`)
}



export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div >
        <div >
          <b>Departures: </b>
        </div>
      <div className={classes.root}>
        <div >
          Northbound:
          <div>Closesttime1</div>
          <div>Closesttime2</div>
          <div>Closesttime3</div>
        </div>
        <div >
          Southbound:
          <div>Closesttime1</div>
          <div>Closesttime2</div>
          <div>Closesttime3</div>
        </div>
      </div>
    </div>
  );
}