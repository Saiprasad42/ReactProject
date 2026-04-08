import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate, NavLink, Outlet } from 'react-router-dom';
import AboutPage from './AboutPage';
import AllCommentsPage from './AllCommentsPage';
import CommentDetailPage from './CommentDetailPage';

const MainNavigation = () => {
  return (
    <nav>
     <NavLink to="/comment">
          Comments
        </NavLink>
        <NavLink to="/">
          About
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
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/comment',
        element: <AllCommentsPage />
      },
      {
        path: "/comment/:author",
        element: <CommentDetailPage />
      },
      {
        path: "/",
        element: <AboutPage />
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;