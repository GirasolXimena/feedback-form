import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'


//Import compenents
import PrimeTheme from '../PrimeTheme/PrimeTheme'
import HorizontalLinearStepper from '../HorizontalLinearStepper/HorizontalLinearStepper'
// import Comments from '../Comments/Comments'
import Feeling from '../Feeling/Feeling'
import Header from '../Header/Header'
// import Support from '../Support/Support'
// import Understanding from '../Understanding/Understanding'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme = {PrimeTheme}>
      <div className="App">
        <Router>
          <div>
            <Header />
              <Route exact path='/' component={Feeling} />
              {/* <Route path='/2' component={Understanding} />
              <Route path='/3' component={Support} />
              <Route path='/4' component={Comments} /> */}
          </div>
        </Router>
      </div>
      <br />
      <br />
      <br />
      <HorizontalLinearStepper />
      </MuiThemeProvider>
    );
  }
}

export default App;
