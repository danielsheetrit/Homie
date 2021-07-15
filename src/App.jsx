import './assets/styles/styles.scss'

import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from './routes'

import { AppHeader } from './cmps/AppHeader.jsx'
import { Footer } from './cmps/Footer.jsx'
import { Loader } from './cmps/Loader.jsx'

import { withSnackbar } from 'notistack'
import { connect } from 'react-redux'
import { getStays } from './store/actions/stay.actions.js'
import { socketService } from './services/socket-service'
import { queryAllByAltText } from '@testing-library/dom'

export class _App extends Component {

  async componentDidMount() {
    this.props.getStays(this.props.filterBy)
    await socketService.setup()
    socketService.on('ORDER_IN', (hostName) => {
      this.props.enqueueSnackbar(`${hostName}, you have a new order.`, {
        variant: 'success',
      })
    })
    socketService.on('STATUS_FROM_HOST', status => {
      let orderStatus = status === 'accepted' ? 'success': 'eror'
      this.props.enqueueSnackbar(`your order has been ${status}.` ,{
        variant: orderStatus, 
        })
    })
  }

  componentWillUnmount() {
    socketService.terminate()
  }

  render() {

    if (!this.props.stays) return <Loader />

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
    stays: state.stayModule.stays,
    filterBy: state.stayModule.filterBy
  }
}

const mapDispatchToProps = {
  getStays
}

export const App = connect(mapStateToProps, mapDispatchToProps)(withSnackbar(_App))