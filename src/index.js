// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // HashRouter avoids dev-server routing issues
import App from './App';
import './App.css';

function ErrorBoundary({ children }) {
  const [err, setErr] = React.useState(null);
  if (err) {
    return (
      <pre style={{whiteSpace:'pre-wrap', color:'crimson', padding:16, background:'#fff3f3', border:'1px solid #f5c2c7'}}>
        {String(err.stack || err)}
      </pre>
    );
  }
  return (
    <React.Suspense fallback={<div style={{padding:16}}>Loading…</div>}>
      <Catch setErr={setErr}>{children}</Catch>
    </React.Suspense>
  );
}
function Catch({ setErr, children }) {
  try { return children; } catch (e) { setErr(e); return null; }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </HashRouter>
);
