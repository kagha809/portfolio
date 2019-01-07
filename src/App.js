import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Panel extends Component {
  render() {
      return (      
          <div id = "panel" className="card row">
          {/*contains everything in left panel*/}

          <div id = "picture" >
          </div>
                         
          </div>
      );
  }
}


class App extends Component {
  render() {
    return (
      <div>
            <div className='row' style={{overflowX: 'hidden'}}>
                 <div className = "col-md-3">
                  <Panel />
                 </div>       
            </div>              
      </div>     
    );
  }
}

export default App;
