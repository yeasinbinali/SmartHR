import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layout/Main.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home/Home.jsx';
import Login from './authentication/Login/Login.jsx';
import Register from './authentication/Register/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
