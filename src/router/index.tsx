import {
    createBrowserRouter,
    Navigate,
  } from 'react-router-dom'
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/login" replace />,
    },
  ])
  
  export { router }