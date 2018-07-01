import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom'

//Import compenents
import Comments from '../Comments/Comments'
import Feeling from '../Feeling/Feeling'
import Header from '../Header/Header'
import HorizontalLinearStepper from '../HorizontalLinearStepper/HorizontalLinearStepper'
import Support from '../Support/Support'
import Understanding from '../Understanding/Understanding'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
              <Route exact path='/' component={Feeling} />
              <Route path='/2' component={Understanding} />
              <Route path='/3' component={Support} />
              <Route path='/4' component={Comments} />
            <HorizontalLinearStepper />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
