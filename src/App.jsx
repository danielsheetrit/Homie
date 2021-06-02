import './assets/styles/styles.scss'

import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from './routes'

import { AppHeader } from './cmps/AppHeader.jsx'
import { Footer } from './cmps/Footer.jsx'

import { connect } from 'react-redux'
import { getStays } from './store/actions/stay.actions.js'

export class _App extends Component {

  componentDidMount() {
    this.props.getStays()
  }

  render() {

    return (
      <div className="app main-container" >
        <AppHeader />
        <Switch>
          {routes.map(route =>
            <Route
              key={route.path}
              exact component={route.component}
              path={route.path} />)}
        </Switch>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = {
  getStays,
}

export const App = connect(null, mapDispatchToProps)(_App)