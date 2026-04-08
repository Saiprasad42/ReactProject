import React, { useContext } from 'react';
import Issue from './Issue';
import { IssueContext } from './IssueContext';
import IssueApi from '../data/IssueApi';
//import { IssueConsumer } from './IssueContext';

// Using Context Hooke Api.....
const IssueList = () => {
  const issueContextVal = useContext(IssueContext);
  const deleteIssue = async (id) => {
    await IssueApi.deleteIssue(id);
    issueContextVal.deleteIssue(id);
  }

  const getIssueNodes = () => {
    const issueNodes = issueContextVal && issueContextVal.issues.map(issue => {
      return (
        <Issue key={issue.id} id={issue.id} IssueDescription={issue.IssueDescription} Severity={issue.Severity} onDelete={(id) => deleteIssue(id)}>
           {issue.Status}     
        </Issue>
      )
    })
    return issueNodes;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
              <th>Issue Description</th>        
              <th>Severity</th>
              <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {getIssueNodes(issueContextVal)}
        </tbody>
      </table>
    </div>
  );
}
export default IssueList;

// Using Context Api.....
/*export default class IssueList extends React.Component {

  getIssueNodes(contextVal) {
    const issueNodes = contextVal && contextVal.issues.map(issue => {
      return (
        <Issue key={issue.id} ID={issue.id} IssueDescription={issue.IssueDescription} Severity={issue.Severity}> 
           {issue.Status}     
        </Issue>
      )
    })
    return issueNodes
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Issue Description</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <IssueConsumer>
              {(contextVal) => (
                this.getIssueNodes(contextVal)
              )}
            </IssueConsumer>
          </tbody>
        </table>
      </div>
    );
  }
}*/
