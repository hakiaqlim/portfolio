import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Mywork from './components/Mywork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'

const App = () => {
  return (
    <Router>
      <div className='bg-[#171513] min-h-screen'>
        <Toaster position="top-center" reverseOrder={false} />

        <Routes>
          {/* Homepage Route */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Mywork />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Product Detail Route */}
          <Route
            path="/ProductDetail/:id"
            element={
              <>
                <Navbar />
                <ProductDetail />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
