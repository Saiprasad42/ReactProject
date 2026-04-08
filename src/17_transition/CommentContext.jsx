import React from 'react';

export const CommentContext = React.createContext();

export class CommentProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }

    render() {
        return (
            <CommentContext.Provider value={{
                ...this.state,
                initComments: (comments) => this.setState({comments:comments}),
                addComment: (comment) => this.setState(prevState => ({comments: [...prevState.comments, comment]})),
                //deleteComment: (id) => this.setState(prevState => ({comments: prevState.comments.filter(comment => comment.id !== id)}))
            }}>
                {this.props.children}
            </CommentContext.Provider>
        )
    }
}

export const CommentConsumer = CommentContext.Consumer;