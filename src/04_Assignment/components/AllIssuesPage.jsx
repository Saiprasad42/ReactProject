import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import IssueList from './IssueList';
import { IssueContext } from './IssueContext';
import IssueApi from '../data/IssueApi';

//Using Context Hooke Api........
const AllIssuesPage = () => {
    const issueContextVal = useContext(IssueContext);

    useEffect(() => {
        async function fetchData() {
            const initialIssues = await IssueApi.getAllIssues();
            issueContextVal.initIssues(initialIssues);
        }
        fetchData();
    }, []);

    return (
        <>
           <h1>Issue List</h1>          
                <IssueList />
                <br />
               <b><Link to="/addIssue">Add Issue</Link></b>
        </>
        
    );
}
//AllCommentsPage.contextType = CommentContext;
export default AllIssuesPage;

//Using Context Api........
/*export default class AllIssuesPage extends React.Component {
    static contextType = IssueContext;
    async componentDidMount() {
        const initialIssues = await IssueApi.getAllIssues();
        this.context.initIssues(initialIssues);
    }

    render() {
        return (
            <>
                <h1>Issue List</h1>
                <IssueList/>
                <br />
                <Link to="/addIssue">Add Issue</Link>
            </>
        );
    }
}*/
// AllCommentsPage.contextType = CommentContext;