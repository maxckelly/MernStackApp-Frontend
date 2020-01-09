import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    data: null
  }

  async componentDidMount() {
    // 1. Make a get request to API http://localhost:5000/lasagne (fetch)
    const response = await fetch("http://localhost:5000/lasagne")
    // 2. Put the result from the API into a state
    const data = await response.json();
    this.setState({
      data: data
    })
    // 3. This will make render run again and the DOM can be updated.
  }
  render () {

    const {data} = this.state

    return (
      <div>
        <h1> Lasagne App </h1>
        <h3> All Lasagnes </h3>
        {data ? data.map((lasagne, index) => {
          return (
            <div key={index}>
              <h4> {lasagne.name} </h4>
            </div>
          )  
        }) : null}

      </div>
  );
}};

export default App;
