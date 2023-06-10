import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Form from './components/Form.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard.jsx';
import ProjectsShow from './components/ProjectsShow.jsx';
import ProjectShow from './components/ProjectShow.jsx';
import ProjectForm from './components/ProjectForm.jsx';
import EditTask from './components/EditTask.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/projects",
        element: <ProjectsShow />
      },
      {
        path: "/projects/new",
        element: <ProjectForm />
      },
      {
        path: "/projects/:id",
        element: <ProjectShow />
      },
    ]
  },
  {
    path: "/new",
    element: <Form />
  },
  {
    path: "/edit/:id",
    element: <EditTask />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
