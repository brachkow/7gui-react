import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './views/Root';
import './tailwind.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="container">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
