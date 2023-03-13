import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Homepage from './homepage'

export default function Home() {
  
  return (
    <div>
       {/* <div className='home'>
     
          <Topbar />
          <Header />
        
      </div> */}
      <div className='main-container'>
        <Homepage />
      </div>
      
    </div>
  )

 
}
