import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import CommentsButtons from './CommentsButtons';


class Comments extends Component {
    state = {

    }
    render() { 
        return ( 
            <div>

            <br />
            <Typography variant="headline" component="h3">
            Would you like to add any additional comments?
            </Typography>
            <br />
            <br />
            <CommentsButtons />
            </div>
         )
    }
}
 
export default Comments;