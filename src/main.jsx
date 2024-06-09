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
import Progress from './pages/Dashboard/HRDashboard/Progress/Progress.jsx';
import EmployeeDetails from './pages/Dashboard/HRDashboard/EmployeeList/EmployeeDetails.jsx';
import AllEmployees from './pages/Dashboard/AdminDashboard/AllEmployees/AllEmployees.jsx';
import Messages from './pages/Dashboard/AdminDashboard/Messages/Messages.jsx';
import Contact from './pages/Contact/Contact.jsx';
import EmployeeSalary from './pages/Dashboard/AdminDashboard/AllEmployees/EmployeeSalary.jsx';


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
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            path: '/dashboard',
            element: <DashboardContent></DashboardContent>
          },
          // employee dashboard item
          {
            path: '/dashboard/worksheet',
            element: <Worksheet></Worksheet>
          },
          {
            path: '/dashboard/paymentHistory',
            element: <PaymentHistory></PaymentHistory>
          },
          // hr dashboard item
          {
            path: '/dashboard/employeeList',
            element: <EmployeeList></EmployeeList>
          },
          {
            path: '/dashboard/employeeList/:id',
            element: <EmployeeDetails></EmployeeDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
          },
          {
            path: '/dashboard/progress',
            element: <Progress></Progress>
          },
          // admin dashboard item
          {
            path: '/dashboard/allEmployees',
            element: <AllEmployees></AllEmployees>
          },
          {
            path: '/dashboard/allEmployees/:id',
            element: <EmployeeSalary></EmployeeSalary>,
            loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
          },
          {
            path: '/dashboard/messages',
            element: <Messages></Messages>
          }
        ]
      },
    ]
  }
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
