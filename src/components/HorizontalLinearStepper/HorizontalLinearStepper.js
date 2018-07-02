import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { compose } from "redux";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom"

const mapStateToProps = (reduxStore) => ({
  reduxStore
});


const styles = theme => ({
    root: {
      width: '90%',
      margin: 'auto',
    },
    button: {
      marginRight: theme.spacing.unit,
    },
    completed: {
      display: 'inline-block',
    },
    instructions: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
    },
});

function getSteps() {
    return ['Feeling', 'Understanding', 'Support', 'Additional Comments'];
  }
  
function getStepContent(step) {
    switch (step) {
      case 0:
        return 'How are you feeling today? ';
      case 1:
        return 'How well are you understanding the content?';
      case 2:
        return 'How well are you being supported?';
      case 3:
        return 'Any comments you want to leave?';
      default:
        return 'Unknown step';
    }
}

class HorizontalLinearStepper extends Component {
  
  componentDidMount() {
      console.log(this.props.reduxStore.stepperReducer);
      
  }

  totalSteps = () => {
    return getSteps().length;
  };

  handleNext = () => {
    let activeStep;
    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !(i in this.props.reduxStore.stepperReducer.completed));
    } else {
      activeStep = this.props.reduxStore.stepperReducer.activeStep + 1;
    }
    const action = {type: 'handleNext', payload: activeStep}
    this.props.dispatch(action);
  }
  
  handleBack = () => {
    const action = {type: 'handleBack'}
    this.props.dispatch(action);

  };

  handleStep = step => () => {
    const action = {type: 'handleStep', payload: step}
    this.props.dispatch(action);
  };

  handleComplete = (step) => {
    const action = {type: 'handleStep', payload: step}
    this.props.dispatch(action);
  };
  
  handleReset = (step) => {
    const action = {type: 'handleReset', payload: step}
    this.props.dispatch(action);

  };

  completedSteps() {
  //   return Object.keys(this.props.reduxStore.stepperReducer.completed.length);
  }

  isLastStep() {
    return this.props.reduxStore.stepperReducer.activeStep === this.totalSteps() - 1;
  }
  
  
  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps();
  }
      render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.props.reduxStore.stepperReducer
  


    
        return (
          <div className={classes.root}>
            <Stepper nonLinear activeStep={activeStep}>
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepButton
                      onClick={this.handleStep(index)}
                      completed={this.props.reduxStore.stepperReducer.completed[index]}
                    >
                      {label}
                    </StepButton>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {this.allStepsCompleted() ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed - you&quot;re finished
                  </Typography>
                  <Button onClick={this.handleReset}>Reset</Button>
                </div>
              ) : (
                <div>
                  <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      Next
                    </Button>
                    {activeStep !== steps.length &&
                      (this.props.reduxStore.stepperReducer.completed[this.props.reduxStore.stepperReducer.activeStep] ? (
                        <Typography variant="caption" className={classes.completed}>
                          Step {activeStep + 1} already completed
                        </Typography>
                      ) : (
                        <Button variant="contained" color="primary" onClick={this.handleComplete}>
                          {this.completedSteps() === this.totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                        </Button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      }
    }

 
export default compose(connect(mapStateToProps),withStyles(styles))(HorizontalLinearStepper);