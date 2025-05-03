import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import toast, { Toaster } from 'react-hot-toast';
import { Shoppingcon } from './context/Shoppingcon.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shoppingcon.provider value>
    <App />
    </Shoppingcon.provider>
    <Toaster/>
    
  </StrictMode>,
)
