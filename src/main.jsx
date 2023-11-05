import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import './index.css'
import myCreateRouter from './routes/Routes';
import AuthProvider from './authProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myCreateRouter}/>
    </AuthProvider>
  </React.StrictMode>,
)
