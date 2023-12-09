import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Neon } from './Neon';

Neon.getInstance();

createRoot(document.getElementById('root')!).render(
    <App />
);
