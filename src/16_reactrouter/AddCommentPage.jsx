
// Implementation using functional component / React Hooks is much simpler
import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate is a React Hook provided by react-router-dom

import CommentForm from './CommentForm';
import CommentApi from './data/CommentApi';

// Container Component is one which interacts with model
export default () => {
    const navigate = useNavigate();    

    const saveComment = (comment) => {
        CommentApi.saveComment(comment); // saving data into model
        navigate('/');
    }
    return (
        <CommentForm onSave={(data) => saveComment(data)} />
    )
}

/*
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import CommentForm from './CommentForm';
import CommentApi from './data/CommentApi';

function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        return <Child {...props} navigate={navigate} location={location} />;
    }
}

// Container Component 
class AddCommentPage extends React.Component {
    saveComment(comment) {
        CommentApi.saveComment(comment); // saving data into model
        this.props.navigate('/');
    }

    render() {
        return (
            <CommentForm onSave={(data) => this.saveComment(data)} />
        );
    }
}

// HOC - Higher Order Component
export default withRouter(AddCommentPage); 
*/
