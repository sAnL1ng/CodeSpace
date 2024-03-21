import React from 'react'
// DOM操作 单独为ReactCOM提供 
import ReactDOM from 'react-dom/client'
// .vue -> .tsx  .jsx -> .tsx template 放在函数里面，JSX 
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
