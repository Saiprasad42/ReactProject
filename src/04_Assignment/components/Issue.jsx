import React from 'react';
import { Link } from 'react-router-dom';

//Using Context Hooke Api........
const Issue = (props) => {
  const onDelete = (event) => {
    event.preventDefault();
    props.onDelete(props.id);
  }

    const path = `/issues/${props.IssueDescription}`;
    return (
      <tr>
        <td><Link to={path}>{props.IssueDescription}</Link></td>
        <td>{props.Severity}</td>
        <td>{props.children}</td>
        <td><a href="about:blank" onClick={(e) => onDelete(e)}>Delete</a></td>
      </tr>
    );
  }
export default Issue;
