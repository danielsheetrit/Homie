import { Component } from 'react'
import { connect } from 'react-redux'
import { getStays } from '../store/actions/stay.actions'

import { StayList } from '../cmps/StayList.jsx'
import { StayFilter } from '../cmps/StayFilter.jsx'
import { Loader } from '../cmps/Loader.jsx'

export class _StayApp extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getStays(this.props.filterBy)
    }

    componentWillUnmount() {
        document.body.classList.remove('header-home-mode-open')
        document.body.classList.remove('header-onclick-mode')
    }

    onSetFilter = (filterBy) => {
        this.props.getStays(filterBy)
    }

    render() {
        const { stays } = this.props
        if (!stays) return <Loader />

        return (
            <section className="stay-app ">
                <StayFilter onSetFilter={this.onSetFilter} />
                <StayList stays={stays} />
            </section>
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
    getStays,
}

export const StayApp = connect(mapStateToProps, mapDispatchToProps)(_StayApp)