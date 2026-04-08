import React from 'react';
import { Link } from 'react-router-dom';

export default class Comment extends React.Component {
  render() {
    const path = `/comment/${this.props.id}`;
    return (
      <tr>
        <td><Link to={path}>{this.props.id}</Link></td>
        <td>{this.props.author}</td>
        <td>{this.props.children}</td>
      </tr>
    );
  }
}
