import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate, NavLink, Outlet} from "react-router-dom";
import AboutPage from './AboutPage';
import AllIssuesPage from './components/AllIssuesPage';
import AddIssuePage from './components/AddIssuePage';
import { IssueProvider } from './components/IssueContext';
import IssueDetailPage from './components/IssueDetailPage';
//import IssueForm from './components/IssueForm';

const MainNavigation = () => {
  return (
    <nav>
      <NavLink to="/">
        About
      </NavLink>
      <NavLink to="/issues">
        Issues
      </NavLink>
    </nav>
  );
} 

const Layout = () => {
  return (
    <>
      <MainNavigation />      
      <Outlet />
    </>
  )};

const router = createBrowserRouter([
  {
      element: <Layout />,
      children: [
          {
              path: "/",
              element: <AboutPage />
          },
          {
              path: '/issues',
              element: <AllIssuesPage />
          },
          {
            path: "/issues/:IssueDescription",
            element: <IssueDetailPage />
          },
          { 
              path: '/addIssue',
              element: <AddIssuePage />
          },
     ]    
  }
]);
//Using ContextHooke Api......
const App = () => {
  return (
    <IssueProvider>
        <RouterProvider router={router} />
    </IssueProvider>
  )
} 
export default App;
// Using Context Api......
/*export default class App extends React.Component {
  handleFormSubmit(values) {
    console.log("handleSubmit from App component");
    console.log(values);
}
  render() {
    return (
      <>
      <IssueProvider>
        <RouterProvider router={router} />
      </IssueProvider>
      </>
    );
  }
}*/

/*
export default App;
export default class App extends React.Component {
  render() {
    return (
      <CommentProvider>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<AllCommentsPage />} />
              <Route path="/addComment" element={<AddCommentPage />} />
            </Routes>
          </div>
        </Router>
      </CommentProvider>
    );
  }
}
*/