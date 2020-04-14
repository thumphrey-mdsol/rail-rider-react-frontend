import React from 'react';
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