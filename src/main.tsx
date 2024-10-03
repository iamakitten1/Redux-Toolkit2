
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.tsx'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <BrowserRouter> 
         <App />
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
)
