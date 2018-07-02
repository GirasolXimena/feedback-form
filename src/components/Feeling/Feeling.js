import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import FeelingButtons from './FeelingButtons';
import { connect } from 'react-redux';


const mapStateToProps = reduxStore => ({
    reduxStore
})

class Feeling extends Component {
    componentDidMount() {
        console.log(this.props.reduxStore);
        
    }
    render() { 
        return ( 
            <div>

            <br />
            <Typography variant="headline" component="h3">
                How are you feeling today?
            </Typography>
            <br />
            <br />
            <FeelingButtons />
            <br />
            <br />
            </div>
         )
    }
}
 
export default connect(mapStateToProps)(Feeling);;