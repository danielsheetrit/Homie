import { Component } from 'react'
import { connect } from 'react-redux'
import { StayList } from '../cmps/StayList.jsx'
import { StayFilter } from '../cmps/StayFilter.jsx'
import { getStays } from '../store/actions/stay.actions'

export class _StayApp extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        document.body.classList.add('mini-header')
        document.body.classList.remove('hide-mini-search')
    }

    render() {
        const { stays } = this.props
        if (!stays) return <h1>reloading</h1>


        return (
            <section className="stay-app">
                <StayFilter />
                <StayList stays={stays} />
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        stays: state.stayModule.stays
    }
}

const mapDispatchToProps = {
    getStays,
}

export const StayApp = connect(mapStateToProps, mapDispatchToProps)(_StayApp)