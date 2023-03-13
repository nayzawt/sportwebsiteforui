import Footer from '@/components/footer/Footer'
import React from 'react'
import Headerss from '../../components/header/Headerss'

 const Layout = ({children}) => {
  
  return (
    <div>
        {/* <Topbar/> */}
        <Headerss />

        {children}
        <Footer />
    </div>
  )
}

export default Layout