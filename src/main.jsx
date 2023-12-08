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
import Progress from './Components/Progress'
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
        path:'menu',
        element:<Menu/>
       }, 
    
          {
            path:'About',
            element:<About/>,
          },
          {
            path:'Progress',
            element:<Progress/>,
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
   
            ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
