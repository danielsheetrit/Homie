import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function _UserOrderPreview({ order, stays }) {
    const stay = getStayById(order.stay._id)
    const statusTxt = getStatusTxt()
    var statusClassName
    function getStayById(stayId) {
        const stay = stays.find((stay) => {
            return stayId === stay._id
        })
        return stay
    }

    function getStatusTxt() {
        let statusTxt;
        if (order.status === 'accepted') {
            statusTxt = 'Order accepted'
            statusClassName = 'accepted'
        } else if (order.status === 'rejected') {
            statusTxt = 'Order rejected'
            statusClassName = 'rejected'
        } else {
            statusTxt = 'Waiting for approval'
            statusClassName = 'pending'
        }
        return statusTxt
    }

    // TODO: put loader
    if (!stay) return <h1></h1>
    return (
        <section className="user-order-preview">
            <Link to={`stay/${stay._id}`}>
                <div className="img-container">
                    <img src={stay.imgUrls[0]} alt="home" />
                </div>
                <div className="info">
                    <p className="dates">{order.startDate} - {order.endDate}</p>
                    <p className="stay-name">{order.stay.name}</p>
                    <p className={statusClassName + ' order-status'}>{statusTxt}</p>
                </div>
            </Link>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        stays: state.stayModule.stays
    }
}

export const UserOrderPreview = connect(mapStateToProps)(_UserOrderPreview)