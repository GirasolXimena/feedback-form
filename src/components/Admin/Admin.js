import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'


const mapStateToProps = (reduxStore) => ({
    reduxStore
  });
  

class Admin extends Component {
componentDidMount() {
    this.getFeedback();
}

getFeedback = () =>{
    console.log('getting axios');
    
axios.get('/admin')
.then(response => 
    console.log(response)
    
)
// .catch((error) => {
//     console.log('error', error);
    
// })
}
    state = {}
    render() { 
        return ( 
            <div>
                </div>
         )
    }
}
 
export default connect(mapStateToProps)(Admin);