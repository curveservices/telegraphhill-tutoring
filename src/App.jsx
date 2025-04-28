import React, { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layout/main/index.jsx';
import LoadingSpinner from './components/loadingSpinner'
import Home from './pages/home'
import Tuition from "./pages/tuition/index.jsx";
import Resources from "./pages/resources/index.jsx";
import NotFound from './pages/404/index.jsx';

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
        <Route
          path='tuition'
          element={
            <Suspense fallback={<LoadingSpinner />} >
              <Tuition />
            </Suspense>
          }
        />
        <Route
          path='resources'
          element={
            <Suspense fallback={<LoadingSpinner />} >
              <Resources />
            </Suspense>}
        />
      </Route>
      <Route
        path='*'
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        }
      />
    </>
  )
)

const App = () => {
  return <RouterProvider router={router} />;
}

export default App
