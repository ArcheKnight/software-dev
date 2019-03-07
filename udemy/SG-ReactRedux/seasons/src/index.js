import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => { console.log(position) }, // Success callback
      (err) => { console.log(err) } //error callback
    );

    return <h3>Latitude: </h3>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)