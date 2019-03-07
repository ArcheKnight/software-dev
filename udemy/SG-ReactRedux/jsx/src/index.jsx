// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const nameInput = {
    label: 'Enter name: ',
    button: 'Submit'
  }

  return (
    <div>
      <label className="label" htmlFor="name">{nameInput.label}</label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{nameInput.button}</button>
    </div>
  );
}

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)