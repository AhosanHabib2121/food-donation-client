import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import './index.css'
import myCreateRouter from './routes/Routes';
import AuthProvider from './authProvider/AuthProvider';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={myCreateRouter} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
