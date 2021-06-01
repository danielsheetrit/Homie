import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShieldAlt,
    faWifi,
    faParking,
    faBus,
    faPizzaSlice,
    faTv,
    faUtensils,
    faSnowflake,
    faWheelchair,
    faBriefcaseMedical
} from '@fortawesome/free-solid-svg-icons'

export function Amenities({ amenities }) {

    const {
        accessibility,
        aidKit,
        airConditioner,
        fastFood,
        kitchen,
        parking,
        publicTransport,
        secured,
        tv,
        wifi,
    } = amenities

    return (
        <div className="amenities-container flex column">
            <h2>Amenities</h2>
            <div className="flex">
                <div className="flex column">
                    <div className={`amenity-container flex align-center ${!secured && 'missing'} first`}>
                        <FontAwesomeIcon icon={faShieldAlt} size="2x" />
                        <span>Compound is perfectly secured.</span>
                    </div>
                    <div className={`amenity-container flex align-center ${!wifi && 'missing'} first`}>
                        <FontAwesomeIcon icon={faWifi} size="2x" />
                        <span>Free Wi-fi.</span>
                    </div>
                    <div className={`amenity-container flex align-center ${!parking && 'missing'} first`}>
                        <FontAwesomeIcon icon={faParking} size="2x" />
                        <span>Free street parking.</span>
                    </div>
                    <div className={`amenity-container flex align-center ${!publicTransport && 'missing'} first`}>
                        <FontAwesomeIcon icon={faBus} size="2x" />
                        <span>Public Transport on the street.</span>
                    </div>
                    <div className={`amenity-container flex align-center ${!fastFood && 'missing'} first`}>
                        <FontAwesomeIcon icon={faPizzaSlice} size="2x" />
                        <span>Very close to fast food stores.</span>
                    </div>
                </div>
                <div className="flex column second">
                    <div className={`amenity-container flex align-center ${!kitchen && 'missing'}`}>
                        <FontAwesomeIcon icon={faUtensils} size="2x" />
                        <span>Kitchen.</span>
                    </div>
                    <div className={`amenity-container flex align-center ${!accessibility && 'missing'}`}>
                        <FontAwesomeIcon icon={faWheelchair} size="2x" />
                        <span>Accessibility services.</span>
                    </div>
                    <div className={`amenity-container flex align-center ${!airConditioner && 'missing'}`}>
                        <FontAwesomeIcon icon={faSnowflake} size="2x" />
                        <span>Air conditioner, hot and cold.</span>
                    </div>
                    <div className={`amenity-container flex align-center ${!tv && 'missing'}`}>
                        <FontAwesomeIcon icon={faTv} size="2x" />
                        <span>TV with standard cable.</span>
                    </div>
                    <div className={`amenity-container flex align-center ${!aidKit && 'missing'}`}>
                        <FontAwesomeIcon icon={faBriefcaseMedical} size="2x" />
                        <span>Aid kit for emergency.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}