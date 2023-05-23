import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#A9A9A9" enableAnimation={true}>
      <App />
    </SkeletonTheme>
  </React.StrictMode>,
)
