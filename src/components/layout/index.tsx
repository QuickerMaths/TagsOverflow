import { Outlet } from 'react-router-dom'
import Header from '../header'
import { Suspense } from 'react'
import Spinner from '../spinner'

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner className='w-[100px] h-[100px]' />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Layout