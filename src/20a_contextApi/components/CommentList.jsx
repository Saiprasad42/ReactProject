import React from 'react';
import Comment from './Comment';
import { CommentConsumer } from './CommentContext';
import CommentApi from '../data/CommentApi';

export default class CommentList extends React.Component {
  /*deleteComment(contextVal, id) {
      CommentApi.deleteComment(id)
        .then(() => contextVal.deleteComment(id));
  }*/

  getCommentNodes(contextVal) {
    const commentNodes = contextVal && contextVal.comments.map(comment => {
      return (
        <Comment key={comment.id} id={comment.id} author={comment.author} >
          {comment.text}
        </Comment>
      )
    })
    return commentNodes
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            <CommentConsumer>
              {(contextVal) => (
                this.getCommentNodes(contextVal)
              )}
            </CommentConsumer>
          </tbody>
        </table>
      </div>
    );
  }
}
