import { tagsLoader } from "./services/tagsLoader"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense } from "react"
import HeaderSkeleton from "./components/header-skeleton"

const router = createBrowserRouter([
  {
    path: '/',
    Component: lazy(() => import('./components/layout/index')),
    children: [{
        index: true,
        path: '/',
        loader: tagsLoader, 
        errorElement: <div>Failed to load tags</div>,
        Component: lazy(() => import('./pages/tags/index')),
    },
    {
        path: '*',
        Component: lazy(() => import('./pages/not-found/index'))
    }]
  }
])

const App = () => {
  return (
    <Suspense fallback={<HeaderSkeleton />}>
        <RouterProvider router={router} />
    </Suspense>
  )
}

export default App