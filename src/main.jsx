import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './Components/About'
import Solutions from './Components/Solutions'
import Customers from './Components/Customers'
import Feedback from './Components/Feedback'
import Hero from './Components/Hero'
import Feature from './Components/Feature'
import Explore from './Components/Explore'
import App from './App'
import Menu from './Components/Menu'
import Layout from './Layout'
const router = createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
 children:[
  {
    path:'/',
    element:<App/>,
      },
    
          {
            path:'About',
            element:<About/>,
          },
          {
            path:'Feature',
            element:<Feature/>,
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
          {
            path:'Explore',
            element:<Explore/>
          },
 ]
  },
  {
    path:'menu',
    element:<Menu/>
   },   
            ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
