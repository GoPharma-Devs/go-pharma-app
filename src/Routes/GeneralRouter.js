import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from '../views/Home'
import Navbar from "../components/Navbar"
import Error404 from "../views/Error404"
import Servicios from "../views/Servicios"
import { useLayoutEffect } from 'react'

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}
function GeneralRouter() {

  return (
    <>

      <BrowserRouter>
        <Wrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='*' element={<Error404 />} />
            <Route path='/servicios' element={<Servicios />} />
            {/* <Route path='*' element={<Error404 />} /> */}
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  )
}

export default GeneralRouter
