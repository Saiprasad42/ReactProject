import React from "react";
import { Link } from 'react-router-dom';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const path = `/comment/${this.props.author}`;
    return (
      <tr>
        <td><Link to={path}>{this.props.author}</Link></td>
        <td>{this.props.children}</td>
      </tr>
    );
  }
}