import './assets/styles/styles.scss'

import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from './routes'

import { AppHeader } from './cmps/AppHeader.jsx'
import { Footer } from './cmps/Footer.jsx'

import { connect } from 'react-redux'
import { getStays } from './store/actions/stay.actions.js'
import { socketService } from './services/socket-service'

export class _App extends Component {

  async componentDidMount() {
    this.props.getStays(this.props.filterBy)
    await socketService.setup()
    socketService.on('ORDER_IN', (stayName) => {

      console.log('got new order!', stayName)
    })
  }

  componentWillUnmount() {
    socketService.terminate()
  }


  render() {

    return (
      <div className="app main-container" >
        <AppHeader />
        <Switch>
          {routes.map(route =>
            <Route
              key={route.path}
              component={route.component}
              path={route.path} />)}
        </Switch>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    filterBy: state.stayModule.filterBy
  }
}

const mapDispatchToProps = {
  getStays,

}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)