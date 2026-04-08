import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CommentForm from './CommentForm';
import { CommentConsumer } from './CommentContext';
import CommentApi from '../data/CommentApi';

function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        return <Child {...props} navigate={navigate} location={location} />;
    }
}

// Container Component
class AddCommentPage extends React.Component {
    async saveComment(contextVal, comment) {
        // F2:
        const newComment = await CommentApi.saveComment(comment);
        contextVal.addComment(newComment);
        this.props.navigate('/');
    }

    render() {
        return (
            <CommentConsumer>
                {(contextVal) => (
                    <CommentForm onSave={(comment) => this.saveComment(contextVal, comment)} />
                )}
            </CommentConsumer>
        );
    }
}

export default withRouter(AddCommentPage);
