import React, { useState } from 'react';
import PortalExample from './components/Portal/PortalExample';
import './App.css';
// import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.js';
import ErrorComponentExample from './components/ErrorBoundary/ErrorComponentExample';
import SuspenceExample from './components/SuspenseExample/SuspenseExample';
import CustomSuspenceExample from './components/SuspenseExample/CustomSuspenseExample';
import { ReactMemoExample } from './components/reactMemo/ReactMemoExample';
import { TearingExample } from './components/useSyncExternalStore/TearingExample';
import FragmentsExample from './components/fragments/FragmentsExample';
import OptimazedList from './components/optimazedList/OptimazedList';

function App() {

    
  return (
    <div className="App">
      <main className="App-header">
        {/* <PortalExample />           */}
        {/* <ErrorComponentExample /> */}
        {/* <SuspenceExample /> */}
        {/* <CustomSuspenceExample /> */}
        {/* <ReactMemoExample/> */}
        {/* <TearingExample /> */}
        {/* <FragmentsExample /> */}

        <OptimazedList />
      </main>
    </div>
  );
}

export default App;
