import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import SupportButtons from './SupportButtons';


class Support extends Component {
    state = {}
    render() { 
        return ( 
            <div>

            <br />
            <Typography variant="headline" component="h3">
            How well are you being supported?
            </Typography>
            <br />
            <br />
            <SupportButtons />
            <br />
            <br />
            <br />
            <br />
            </div>
         )
    }
}
 
export default Support;