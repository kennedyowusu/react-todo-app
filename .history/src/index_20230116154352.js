import React from 'react'
import ReactDOM from 'react-dom'
//component file
import TodoContainer from './functionBased/components/TodoContainer'

//stylesheet
import './functionBased/App.css'

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)