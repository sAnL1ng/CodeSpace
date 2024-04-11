import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CApp from './CApp.jsx'
import PApp from './PApp.jsx'
import BApp from './BApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    {/* <App /> */}
    {/* <CApp /> */}
    {/* <PApp /> */}
    <BApp />
  </React.StrictMode>,
)
