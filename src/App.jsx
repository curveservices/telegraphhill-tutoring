import React, { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layout/main/index.jsx';
import LoadingSpinner from './components/loadingSpinner'
import Home from './pages/home'

import './App.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingSpinner />} >
              <Home />
            </Suspense>
          }
        />
      </Route>
    </>
  )
)

const App = () => {
  return <RouterProvider router={router} />;
}

export default App
