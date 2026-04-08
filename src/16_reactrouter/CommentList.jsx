import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
  render() {
    let commentNodes = this.props.comments.map(function (comment) {
      return (
        <Comment key={comment.id} id={comment.id} author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Author</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {commentNodes}
          </tbody>
        </table>
      </div>
    );
  }
}
