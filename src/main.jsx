import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './Components/About'
import Solutions from './Components/Solutions'
import Customers from './Components/Customers'
import Feedback from './Components/Feedback'
import Hero from './Components/Hero'
import App from './App'
const router = createBrowserRouter([
  {
    path:'',
    element:<App/>,
  },
      {
        path:'hero',
        element:<Hero/>,
          },
              {
                path:'About',
                element:<About/>,
              },
              {
                path:'Solutions',
                element:<Solutions/>,
              },
              {
                path:'Customers',
                element:<Customers/>,
              },
              {
                path:'Feedback',
                element:<Feedback/>
              },
            ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
