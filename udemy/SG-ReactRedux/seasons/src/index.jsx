import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    // The only time that we directly assign something to this.state
    //this.state = { lat: null };
    this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
          (position) => {
            // Call setState to update state
            this.setState({ lat: position.coords.latitude });
          }, // Success callback
          (err) => {
            this.setState({ errorMessage: err.message });
          } //error callback
        );
  }

  // React requires render method
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else {
      return <div>Loading!</div>;
    }
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
