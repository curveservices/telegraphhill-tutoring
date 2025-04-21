import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './layout/main/index.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        
      </Route>
    </>
  )
)

const App = () => {

  return (
    <div>
      
    </div>
  )
}

export default App
