
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.tsx'



createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
    <App />
    </Provider>
    
  </React.StrictMode>,
)
