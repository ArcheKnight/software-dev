import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          comment={faker.lorem.sentence()}
          avatar={faker.internet.avatar()}
          date="Today at 6:00PM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          comment={faker.lorem.sentence()}
          avatar={faker.internet.avatar()}
          date="Today at 6:00PM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          comment={faker.lorem.sentence()}
          avatar={faker.internet.avatar()}
          date="Today at 6:00PM"
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)