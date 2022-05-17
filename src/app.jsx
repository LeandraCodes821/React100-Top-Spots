import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from "./topspot"

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
			topspots: []
		};
  }
}

export default App;
