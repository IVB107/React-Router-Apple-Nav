import React, { Component } from 'react';
import './App.css';
import { tabData, apple } from './AppleData';

import NavWrapper from './components/NavWrapper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tabs: [],
      devices: {}
    }
  }

  componentDidMount = () => {
    this.setState({ tabs: tabData, devices: apple });
  }

  render() {
    return (
      <div className="App">
        <NavWrapper tabs={this.state.tabs}/>
      </div>
    );
  }
}

export default App;
