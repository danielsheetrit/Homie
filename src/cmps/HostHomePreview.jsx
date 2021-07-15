import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
export function HostHomePreview({ stay, hostOrders }) {
    if (!hostOrders) return <h1>Loading</h1>
    const stayBookings = hostOrders.filter(order => order.stay._id === stay._id && order.status === "accepted")
    return (
        <div className="host-home-preview">
            <div className="top-content flex">
                <p><span>Name: </span>{stay.name} </p>
                <div className="btn-container">
                    <button><FontAwesomeIcon icon={faEdit} /></button>
                    <button><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
            </div>
            <div className="main-content flex">
                <img src={stay.imgUrls[0]} alt="" />
                <div className="div">
                    <h3>House Bookings: {stayBookings.length}
                    </h3>
                    {stayBookings.length === 0 ? null :
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Check In</th>
                                    <th>Check Out</th>
                                    {/* <th>Contact</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {stayBookings.map(order => {
                                    return (<tr key={order._id}>
                                        <td className="flex justify-start align-center"><img src={order.buyer.imgUrl} alt="user" />{order.buyer.fullName}</td>
                                        <td>{order.startDate}</td>
                                        <td>{order.endDate}</td>
                                        {/* <td><button><FontAwesomeIcon icon={faEnvelope} /></button><button><FontAwesomeIcon icon={faPhone} /></button></td> */}
                                    </tr>)
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>
            {/* {stay.loc.city} */}


        </div>
    )
}