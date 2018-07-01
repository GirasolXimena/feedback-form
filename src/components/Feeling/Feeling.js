import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import FeelingPaper from './FeelingPaper';


class Feeling extends Component {
    state = {}
    render() { 
        return ( 
            <div>
                <FeelingPaper/>
            </div>
         )
    }
}
 
export default Feeling;