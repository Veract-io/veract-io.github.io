import React from 'react'
import Navbar from './components/layout/Navbar'
import Banner from './components/layout/Landing_Page/Banner'
import ShowReel from './components/layout/Landing_Page/ShowReel'
import About_Us from './components/layout/Landing_Page/About_Us'
import Advantages from './components/layout/Landing_Page/Advantages'
import Services from './components/layout/Landing_Page/Services'
import We_Work_With from './components/layout/Landing_Page/We_Work_With'
import Testimonials from './components/layout/Landing_Page/Testimonials'
import Footer from './components/layout/Landing_Page/Footer'
import LenisProvider from './LenisProvider'

export default function Page() {
  return (
    <LenisProvider>
      <div className='w-full flex flex-col items-center justify-center'>
        <Navbar />
        <Banner />
        <ShowReel />
        <About_Us />
        <Advantages />
        <Services />
        <We_Work_With />
        {/* <Testimonials /> */}
        <Footer />
      </div>
    </LenisProvider>
  )
}
