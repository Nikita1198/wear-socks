import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import { initFlowbite } from 'flowbite';
import { ThemeProvider, createTheme } from 'flowbite-react';

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
      <ThemeProvider theme={customTheme}>
        <Navbar />
        <div className="pt-40 container mx-auto"><p>Привет Мир</p></div>
      </ThemeProvider>
  )
}

export default App
