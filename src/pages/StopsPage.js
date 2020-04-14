import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import StopsContainer from '../containers/StopsContainer';

const StopsPage = (props) =>{

        return(                   
            <Container maxWidth="lg" >
                <StopsContainer {...props}/>
            </Container> 
        )
}

export default StopsPage;