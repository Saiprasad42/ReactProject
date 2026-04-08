import React from 'react';
import { Link } from 'react-router-dom';
import CommentList from './CommentList';
import { CommentConsumer, CommentContext } from './CommentContext';
import CommentApi from '../data/CommentApi';

export default class AllCommentsPage extends React.Component {
    static contextType = CommentContext;
    async componentDidMount() {
        const initialComments = await CommentApi.getAllComments();
        this.context.initComments(initialComments);
    }

    render() {
        return (
            <>
                <h1>Comments - Using Context API</h1>
                <CommentList/>
                <br />
                <Link to="/addComment">Add Comment</Link>
            </>
        );
    }
}
// AllCommentsPage.contextType = CommentContext;