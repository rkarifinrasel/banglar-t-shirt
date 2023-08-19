import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Layout/Main.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import OrderReview from './components/OrderReview/OrderReview.jsx'
import Contact from './components/Contact/Contact.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('t-shirt.json')
      },
      {
           path:'/About',
           element:<About></About>
      },
      {
        path:'/OrderReview',
        element:<OrderReview></OrderReview>
      },
      {
        path:'/Contact',
        element:<Contact></Contact>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
