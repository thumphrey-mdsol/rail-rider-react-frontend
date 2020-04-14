import React from 'react'
import FavoritesFormContainer from '../containers/FavoritesFormContainer';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 50,
        minWidth: "35vw",
        minHeight: "50px"
    }
})

const FavoritesFormPage = (props)  =>{
    const classes = useStyles(props)
        return(                    
            <Container maxWidth="md" className={classes.root}>
                <Paper elevation={3}>
                    <FavoritesFormContainer user={props.user} stops={props.stops} history={props.history} addFav={props.addFav}/>
                </Paper>
            </Container> 
            )
}

export default FavoritesFormPage;