import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/globals.css'
import { ThemeProvider } from './context/theme-provider.tsx'
import TagsProvider from './context/tags-context.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense } from "react"
import HeaderSkeleton from "./components/header-skeleton"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { tagsLoader } from './services/tagsLoader.ts'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    Component: lazy(() => import('./components/layout/index')),
    children: [{
        index: true,
        path: '/',
        loader: tagsLoader(queryClient),
        errorElement: <div>Failed to load tags</div>,
        Component: lazy(() => import('./pages/tags/index')),
    },
    {
        path: '*',
        Component: lazy(() => import('./pages/not-found/index'))
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TagsProvider>
          <Suspense fallback={<HeaderSkeleton />}>
            <RouterProvider router={router} />
          </Suspense>
        </TagsProvider>
      </ThemeProvider>
    </QueryClientProvider>  
  </React.StrictMode>,
)

