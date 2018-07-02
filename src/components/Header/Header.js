import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { compose } from "redux";
import { connect } from 'react-redux';

const mapStateToProps = (reduxStore) => ({
    reduxStore
  });
class Header extends Component {
    render() { 
    if (this.props.reduxStore.stepperReducer.goToNextStep) {
        console.log(this.props.reduxStore.stepperReducer.activeStep);
      if (this.props.reduxStore.stepperReducer.activeStep===4) {
        return <Redirect to= '/5' />
  
        }
      else if (this.props.reduxStore.stepperReducer.activeStep===3) {
        return <Redirect to= '/4' />
  
        }
      else if (this.props.reduxStore.stepperReducer.activeStep===2) {
        return <Redirect to= '/3' />
  
        }
      else if (this.props.reduxStore.stepperReducer.activeStep === 1 ) {
        return <Redirect to= '/2' />
  
        }
      }
        return ( 
        <div>

        </div>
         )
    }
}
 
export default connect(mapStateToProps)(Header);