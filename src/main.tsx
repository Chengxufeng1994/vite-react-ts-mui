import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/global.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Failed to find the root element');
  const fallbackElement = document.createElement('div');
  fallbackElement.innerText = 'An error occurred while rendering the app. Please refresh the page.';
  document.body.appendChild(fallbackElement);
} else {
  Promise.all([import('@/App')]).then(([{ default: App }]) => {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });
}
