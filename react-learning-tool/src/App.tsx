import React, { useState } from 'react';
import PortalExample from './components/react_js/Portal/PortalExample';
import './App.css';
// import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.js';
import ErrorComponentExample from './components/react_js/ErrorBoundary/ErrorComponentExample';
import SuspenceExample from './components/react_js/SuspenseExample/SuspenseExample';
import CustomSuspenceExample from './components/react_js/SuspenseExample/CustomSuspenseExample';
import { ReactMemoExample } from './components/react_js/reactMemo/ReactMemoExample';
import { TearingExample } from './components/react_js/useSyncExternalStore/TearingExample';
import FragmentsExample from './components/react_js/fragments/FragmentsExample';
import OptimazedList from './components/react_js/optimazedList/OptimazedList';
import UseMemoCallbackExample from './components/react_js/useMemoCalback/useMemoCalback';
import { CustomHookExample } from './components/react_js/customHook/CustomHookExample';
import { ReducerForm } from './components/react_js/useReducer/ReducerForm';
import LazyInitExample from './components/react_js/lazyInitialization/LazyInitExample';
import ParentLazyInitExample from './components/react_js/lazyInitialization/ParentLazyInitExample';
// import ImperativeHandleExample from './components/imperativeHandle/ImperativeHandleExample';
import ImperativeHandleExample from './components/react_js/imperativeHandle/ImperativeHandleExample';
import { ForwardRefExample, InnerRefExample } from './components/react_js/forwardRef/ForwardRefExample';
import { AsyncUseEffect } from './components/react_js/AsyncUseEffect.tsx/AsyncUseEffect';
import { WithoutTransition, WithTransition } from './components/react_js/useTransition/UseTransitionExample';
import { UseDefferedValueSearch, UsualSearch } from './components/react_js/useDefferedValue/UseDefferedValue';
import MemoizationSample from './components/react_js/memoization/MemoizationSample';
import VirtualizationExample from './components/react_js/virtualization/VirtualizationExample';
import { ChunkedComputation } from './components/react_js/heavyComputation/ChunkedComputation';
import { WebWorkerExample } from './components/react_js/heavyComputation/WebWorkerExample';
import OldRedux from './components/redux/oldRedux/OldRedux';
import NewRedux from './components/redux/newRedux/NewRedux';

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
        {/* <ParentLazyInitExample /> */}
        {/* <ParentLazyInitExample /> */}
        {/* <ImperativeHandleExample /> */}
        {/* <ForwardRefExample /> */}
        {/* <InnerRefExample /> */}
        {/* <AsyncUseEffect /> */}
        {/* <WithoutTransition /> */}
        {/* <WithTransition />/ */}

        {/* <UseDefferedValueSearch /> */}
        {/* <UsualSearch /> */}
        {/* <MemoizationSample /> */}
        {/* <VirtualizationExample /> */}
        {/* <ChunkedComputation /> */}
        {/* <WebWorkerExample /> */}

        {/* redux */}
        {/* <OldRedux /> */}
        <NewRedux />

      </main>
    </div>
  );
}

export default App;
