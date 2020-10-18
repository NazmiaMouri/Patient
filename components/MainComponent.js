import React, { Component } from 'react';
import List from './List';
import { PATIENTS } from '../shared/patients';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: PATIENTS
    };
  }

  render() {
 
    return (
        <List patients={this.state.patients} />
    );
  }
}
  
export default Main;