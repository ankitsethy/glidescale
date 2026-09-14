import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Production HTML is prerendered, so hydrate it. The dev server serves an empty
// shell, which has to be mounted from scratch instead.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
