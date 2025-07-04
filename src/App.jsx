import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import { initFlowbite } from 'flowbite';
import { ThemeProvider, createTheme } from 'flowbite-react';
import HeroSection from './components/HeroSection'
import Gallery from './components/Gallery'
import ProductBenefits from './components/ProductBenefits'
import DecorativeSection from './components/DecorativeSection'
import PricingSection from './components/PricingSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import YandexMetrika from './components/YandexMetrika'

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
      <YandexMetrika />
      <ThemeProvider theme={customTheme}>
        <Navbar />
        <HeroSection />
        <Gallery />
        <ProductBenefits />
        <DecorativeSection />
        <PricingSection />
        <ContactForm />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
