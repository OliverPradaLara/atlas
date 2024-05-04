import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { App } from './pages/App'
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { UserDetail } from './components/UserDetail';
import { Form } from './pages/Form';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path: '/error',
    element: <div>error</div>
  },{
    path: "user/:userId",
    element: <UserDetail />,
  },{
    path: "/form",
    element: <Form />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
