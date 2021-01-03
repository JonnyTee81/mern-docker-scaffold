import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      apiResponse: 'Waiting on response...'
    };
  }
  
  componentDidMount() {
    const apiUrl = "http://localhost:5000/testAPI";
    fetch(apiUrl) 
      .then(res => res.text())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            apiResponse: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, apiResponse } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Yo dawg!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactor
        </a>
        <p>{apiResponse}</p>
      </header>
    </div>
        
      );
    }
  }
}

export default App;
