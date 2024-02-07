import React from 'react'
import Sidebar from './common-components/Sidebar'
import Navbar from './common-components/Navbar'

const Layout = ({children}) => {
  return (
    <div className='flex flex-row h-full w-full overflow-hidden'>
      <Sidebar />
      <div className="main-content flex flex-col w-full h-full">
        <Navbar />
        <div className="page-content w-full h-full">{children}</div>
      </div>
    </div>
  )
}

export default Layout
