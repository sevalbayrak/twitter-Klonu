import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './rouder'
import { RouterProvider } from 'react-router-dom'
import './assets/css/tailwind.css'
import store from './store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>

)
