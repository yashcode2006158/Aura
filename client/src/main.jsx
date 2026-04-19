import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ModalProvider } from './context/ModalContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <ModalProvider>
          <ParallaxProvider>
            <App />
          </ParallaxProvider>
        </ModalProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
);
