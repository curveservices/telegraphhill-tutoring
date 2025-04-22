import React, { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layout/main/index.jsx';
import LoadingSpinner from './components/loadingSpinner'
import Home from './pages/home'

import './App.scss';
import Tuition from './pages/tuition/index.jsx';

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
        <Route
          path='tuition'
          element={
            <Suspense fallback={<LoadingSpinner />} >
              <Tuition />
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
