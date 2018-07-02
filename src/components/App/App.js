import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Paper from '@material-ui/core/Paper'




//Import compenents
import PrimeTheme from '../PrimeTheme/PrimeTheme'
import Comments from '../Comments/Comments'
import Feeling from '../Feeling/Feeling'
import Header from '../Header/Header'
import Support from '../Support/Support'
import Understanding from '../Understanding/Understanding'
import HorizontalLinearStepper from '../HorizontalLinearStepper/HorizontalLinearStepper';
import RealHeader from '../../RealHeader/RealHeader';
import Admin from '../Admin/Admin'


class App extends Component {    
  
  componentWillMount() {
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
    console.log(styles);
    
  }
  
  render() {

    return (
      <MuiThemeProvider theme = {PrimeTheme}>
      <div className="App">
      <RealHeader />
        <Router>
          <div>
            <Header />
            <Paper className={'root'} elevation={5}>
              <Route exact path='/' component={Feeling} />
              <Route path='/2' component={Understanding} />
              <Route path='/3' component={Support} />             
              <Route path='/4' component={Comments} /> 
              <Route path='/Admin' component={Admin} /> 
            </Paper>

      <br />
      <br />
      <br />
      <HorizontalLinearStepper />
          </div>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
