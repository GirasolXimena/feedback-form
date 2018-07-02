import React, { Component } from 'react';

class RealHeader extends Component {
    state = {}
    render() { 
        return (        
         <div>
            <header className="App-header">
                <h1 className="App-title">Feedback!</h1>
                <h4><i>Don't forget it!</i></h4>
            </header>
        </div> )
    }
}
 
export default RealHeader;