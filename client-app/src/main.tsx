import { createRoot } from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import React from 'react'
import { StoreContext, store } from './app/stores/store'
import { router } from './app/router/routes'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <RouterProvider router={router}/>
        </StoreContext.Provider>
  </React.StrictMode>,
)
