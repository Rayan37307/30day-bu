import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import fontUrl from './kaium.ttf?url';
const style = document.createElement('style');
style.textContent = `
  @font-face {
    font-family: 'KaiumFont';
    src: url('${fontUrl}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
