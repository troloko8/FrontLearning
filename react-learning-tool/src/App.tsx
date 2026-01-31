import React, { useState } from 'react';
import PortalExample from './components/Portal/PortalExample';
import './App.css';
// import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.js';
import ErrorComponentExample from './components/ErrorBoundary/ErrorComponentExample';
import SuspenceExample from './components/SuspenseExample/SuspenseExample';
import CustomSuspenceExample from './components/SuspenseExample/CustomSuspenseExample';

function App() {


  return (
    <div className="App">
      <main className="App-header">
        {/* <PortalExample />           */}
        {/* <ErrorComponentExample /> */}
        {/* <SuspenceExample /> */}
        <CustomSuspenceExample />
      </main>
    </div>
  );
}

export default App;
