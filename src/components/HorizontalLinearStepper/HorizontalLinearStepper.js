import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
      width: '90%',
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
    state = {
        activeStep: 0,
        completed: {},
      };
    
      totalSteps = () => {
        return getSteps().length;
      };
    
      handleNext = () => {
        let activeStep;
    
        if (this.isLastStep() && !this.allStepsCompleted()) {
          // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          const steps = getSteps();
          activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
        } else {
          activeStep = this.state.activeStep + 1;
        }
        this.setState({
          activeStep,
        });
      };
    
      handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
          activeStep: activeStep - 1,
        });
      };
    
      handleStep = step => () => {
        this.setState({
          activeStep: step,
        });
      };
    
      handleComplete = () => {
        const { completed } = this.state;
        completed[this.state.activeStep] = true;
        this.setState({
          completed,
        });
        this.handleNext();
      };
    
      handleReset = () => {
        this.setState({
          activeStep: 0,
          completed: {},
        });
      };
    
      completedSteps() {
        return Object.keys(this.state.completed).length;
      }
    
      isLastStep() {
        return this.state.activeStep === this.totalSteps() - 1;
      }
    
      allStepsCompleted() {
        return this.completedSteps() === this.totalSteps();
      }
      render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        
          
    
        return (
          <div className={classes.root}>
            <Stepper nonLinear activeStep={activeStep}>
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepButton
                      onClick={this.handleStep(index)}
                      completed={this.state.completed[index]}
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
                      (this.state.completed[this.state.activeStep] ? (
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

 
export default withStyles(styles)(HorizontalLinearStepper);