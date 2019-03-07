import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author={faker.internet.userName()} comment={faker.lorem.sentences()} avatar={faker.internet.avatar()} date={Date()} />
      <CommentDetail author={faker.internet.userName()} comment={faker.lorem.sentences()} avatar={faker.internet.avatar()} date={Date()} />
      <CommentDetail author={faker.internet.userName()} comment={faker.lorem.sentences()} avatar={faker.internet.avatar()} date={Date()} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)