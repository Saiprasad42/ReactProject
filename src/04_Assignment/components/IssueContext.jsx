import React, { useState } from 'react';

export const IssueContext = React.createContext();

//Using Context Hooke Api...
export const IssueProvider = (props) => {
    const [issues, setIssues] = useState([]);

    return (
        <IssueContext.Provider value={{
            issues,
            initIssues: issues => setIssues(issues),
            addIssue: issue => setIssues([...issues,  issue]),
            deleteIssue: id => setIssues(issues.filter(issue => issue.id !== id))
        }}>
            {props.children}
        </IssueContext.Provider>
    )
}

//Using Context Api...
/*export class IssueProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
        }
    }

    render() {
        return (
            <IssueContext.Provider value={{
                ...this.state,
                initIssues: (issues) => this.setState({issues: issues}),
                addIssue: (issue) => this.setState(prevState => ({issues: [...prevState.issues, issue]})),
                //deleteComment: (id) => this.setState(prevState => ({issues: prevState.issues.filter(comment => comment.id !== id)}))
            }}>
                {this.props.children}
            </IssueContext.Provider>
        )
    }
}

export const IssueConsumer = IssueContext.Consumer;
*/