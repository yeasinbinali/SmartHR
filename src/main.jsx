import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layout/Main.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home/Home.jsx';
import Login from './authentication/Login/Login.jsx';
import Register from './authentication/Register/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';
import Worksheet from './pages/Dashboard/EmployeeDashboard/Worksheet/Worksheet.jsx';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import PaymentHistory from './pages/Dashboard/EmployeeDashboard/PaymentHistory/PaymentHistory.jsx';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard.jsx';
import DashboardContent from './pages/Dashboard/DashboardContent/DashboardContent.jsx';
import EmployeeList from './pages/Dashboard/HRDashboard/EmployeeList/EmployeeList.jsx';


const queryClient = new QueryClient()

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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardContent></DashboardContent>
      },
      {
        path: '/dashboard/worksheet',
        element: <Worksheet></Worksheet>
      },
      {
        path: '/dashboard/paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: '/dashboard/employeeList',
        element: <EmployeeList></EmployeeList>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-xl mx-auto px-5'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
)
