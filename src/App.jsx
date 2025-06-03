import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import { initFlowbite } from 'flowbite';
import { ThemeProvider, createTheme } from 'flowbite-react';
import HeroSection from './components/HeroSection'
import ProductBenefits from './components/ProductBenefits'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const customTheme = createTheme({
  button: {
    color: {
      primary: "bg-red-500 hover:bg-red-600",
      secondary: "bg-blue-500 hover:bg-blue-600",
    },
    size: {
      lg: "px-6 py-3 text-lg",
    },
  },
});

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Navbar />
        <HeroSection />
        <ProductBenefits />
        <ContactForm />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
