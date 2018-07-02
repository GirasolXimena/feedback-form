import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import UnderstandingButtons from './UnderstandingButtons';


class Understanding extends Component {
    state = {}
    render() { 
        return ( 
            <div>

            <br />
            <Typography variant="headline" component="h3">
            How well are you understanding the content?
            </Typography>
            <br />
            <br />
            <UnderstandingButtons />
            <br />
            <br />
            <br />
            <br />
            </div>
         )
    }
}
 
export default Understanding;