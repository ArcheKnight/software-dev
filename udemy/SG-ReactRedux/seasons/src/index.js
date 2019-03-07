import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    // The only time that we directly assign something to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // Call setState to update state
        this.setState({ lat: position.coords.latitude });
      }, // Success callback
      (err) => { console.log(err) } //error callback
    );
  }

  // React requires render method
  render() {
    return <h3>Latitude: {this.state.lat}</h3>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)