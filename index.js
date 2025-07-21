import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '4rem' }}>
    <h1>Zilji Performance</h1>
    <p>Deine Garage in Speicherschwendi</p>
    <p>Diese Beispielseite funktioniert auf Vercel!</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
