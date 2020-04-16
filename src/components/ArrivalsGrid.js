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
    if(m<10){
      m = "0"+m
    }
    return(`${h}:${m}PM`)
}

const randomTime2 = () => {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes()+ 20 + Math.floor(Math.random() * 20)
  if(m>59){
      m = m-60
      h++
  }
  if(h>=12){
      h = h-12
  }
  if(m<10){
    m = "0"+m
  }
  return(`${h}:${m}PM`)
}

const randomTime3 = () => {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes()+ 40 + Math.floor(Math.random() * 20)
  if(m>118){
      m = m-120
      h++
  } else if (m>59){
    m = m-60
    h++
  }
  if(h>=12){
      h = h-12
  }
  if(m<10){
    m = "0"+m
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
          <div>{randomTime1()}</div>
          <div>{randomTime2()}</div>
          <div>{randomTime3()}</div>
        </div>
        <div >
          Southbound:
          <div>{randomTime1()}</div>
          <div>{randomTime2()}</div>
          <div>{randomTime3()}</div>
        </div>
      </div>
    </div>
  );
}