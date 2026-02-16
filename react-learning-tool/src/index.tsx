import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { hydrateRoot } from 'react-dom/client'
import Counter from './components/react_js/hydratation/Cuounter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const defaultState = {
  count: 0
}

const reducer = (state = defaultState, action: any) => {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload }
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload }
    default:
      return state
  }
}

const store = createStore(reducer)

root.render(

  <Provider store={store}>
    <App />
  </Provider>
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
);


// hydrateRoot(
//   document.getElementById('root')!,
//   <Counter />
// )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
