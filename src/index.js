import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import { App } from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

import { SnackbarProvider } from 'notistack'
import Slide from '@material-ui/core/Slide'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router >
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          TransitionComponent={Slide}
          preventDuplicate
          maxSnack={1}
        >
          <App />
        </SnackbarProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();