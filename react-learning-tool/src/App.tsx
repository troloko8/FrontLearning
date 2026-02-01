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
import UseMemoCallbackExample from './components/useMemoCalback/useMemoCalback';
import { CustomHookExample } from './components/customHook/CustomHookExample';
import { ReducerForm } from './components/useReducer/ReducerForm';
import LazyInitExample from './components/lazyInitialization/LazyInitExample';
import ParentLazyInitExample from './components/lazyInitialization/ParentLazyInitExample';

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

        {/* <OptimazedList /> */}
        {/* <UseMemoCallbackExample /> */}
        {/* <CustomHookExample /> */}
        {/* <ReducerForm /> */}
        <ParentLazyInitExample />
      </main>
    </div>
  );
}

export default App;
