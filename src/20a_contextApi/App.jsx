import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllCommentsPage from './components/AllCommentsPage';
import AddCommentPage from './components/AddCommentPage';
import { CommentProvider } from './components/CommentContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllCommentsPage />
  },
  {
    path: "/addComment",
    element: <AddCommentPage />
  }
]);

export default class App extends React.Component {
  render() {
    return (
      <CommentProvider>
        <RouterProvider router={router} />
      </CommentProvider>
    )
  }
}

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