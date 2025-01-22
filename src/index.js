// Import React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot
import App from './App'; // Your main App component

// Get the root element from your HTML
const rootElement = document.getElementById('root');

// Create a root
const root = createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
