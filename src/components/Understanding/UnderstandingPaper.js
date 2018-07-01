
import React from 'react';
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import FeelingButtons from './FeelingButtons';


const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      margin: 'auto',
      width: '90%'
    },
  });


function FeelingPaper(props) {
    const { classes } = props;
    return (
        <div>
          <Paper className={classes.root} elevation={5}>
            <Typography variant="headline" component="h3">
                How are you feeling today?
            </Typography>
            <FeelingButtons />
          </Paper>
        </div>
      );
    }

export default withStyles(styles)(FeelingPaper);
