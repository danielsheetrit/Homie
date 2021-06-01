import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { App } from './App.jsx'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import { store } from './store/store.js'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router >
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();