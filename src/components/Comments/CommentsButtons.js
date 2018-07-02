import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { compose } from "redux";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'

const styles = ({
    root: {
      color: '#4BA79E',
      '&$checked': {
        color: '#4BA79E',
      },
    },
    checked: {},
    size: {
      width: 40,
      height: 40,
    },
    sizeIcon: {
      fontSize: 20,
    },
  });

let formInput;

const mapStateToProps = (reduxStore) => ({
    reduxStore
  });

const handleFormChange = (event) => {
    console.log(event.target.value);
    formInput = event.target.value
    return formInput
}


class CommentsButtons extends Component {
  
  state = {
    selectedValue: '',
  };


      handleSubmit = (event) => {
            console.log(event.target);
            console.log(formInput);
            let action = {type: 'commentHandler', payload: formInput};
            this.props.dispatch(action);
            
        }

      handleChange = event => {
          console.log(event.target.getAttribute('name'));
          this.setState({ selectedValue: event.target.value });
          let action = {type: 'commentButtonHandler', payload: event.target.value};
          this.props.dispatch(action);
      };
    
      render() {
    
        return (
          <div>
            <FormControlLabel
                control = {
                    <Radio
                        checked={this.state.selectedValue === 'flagged'}
                        onChange={this.handleChange}
                        value= 'True'
                        color='primary'
                        name="feedback-button"
                        aria-label="flagged"
                    />
                }
                label = "Please contact me"
            />
            <br />
            <input onChange={handleFormChange} type="text" name="commentInput"/>
            <br />
            <br />
             <Button onClick={this.handleSubmit} color='primary'
            >Submit</Button>
            <br />
            <br />   


          </div>
        );
      }
    }
 
export default compose(connect(mapStateToProps),withStyles(styles))(CommentsButtons);