import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'
import { BcvRateProvider } from './context/BcvRateContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BcvRateProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </BcvRateProvider>
    </ThemeProvider>
  </StrictMode>,
)
