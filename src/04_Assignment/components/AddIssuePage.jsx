import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import IssueForm from './IssueForm';
import { IssueContext } from './IssueContext';
import IssueApi from '../data/IssueApi';

//Using Context Hooke Api........
const AddIssuePage = () => {
    const navigate = useNavigate();
    const issueContextVal = useContext(IssueContext);

    const submitIssue = async (issue) => {
        // F2:
        const newIssue = await IssueApi.submitIssue(issue);
        issueContextVal.addIssue(newIssue);
        navigate('/');
    }

    return <IssueForm onSubmit={(issue) => submitIssue(issue)} />;
}

export default AddIssuePage;

//Using Context Api........
/*function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        return <Child {...props} navigate={navigate} location={location} />;
    }
}

// Container Component
class AddIssuePage extends React.Component {
    async submitIssue(contextVal, issue) {
        // F2:
        const newIssue = await IssueApi.submitIssue(issue);
        contextVal.addIssue(newIssue);
        this.props.navigate('/');
    }

    render() {
        return (
            <IssueConsumer>
                {(contextVal) => (
                     <IssueForm onSubmit={(issue) => this.submitIssue(contextVal, issue)} />
                )}
            </IssueConsumer>
        );
    }
}
export default withRouter(AddIssuePage);*/

