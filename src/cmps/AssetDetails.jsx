import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSparkles, faHome, faBook } from '@fortawesome/free-solid-svg-icons'

export function AssetDetails({ type, houseRules }) {

    let assetTypeDesc
    let houseRulesDesc

    switch (type) {
        case 'Entire home':
            assetTypeDesc = 'You’ll have the whole compound to yourself.'
            break;
        case 'Apartment':
            assetTypeDesc = 'Private room, cuzy and sweet.'
        case 'Studio':
            assetTypeDesc = 'Enjoy private room with a lot of space.'
            break;
        case 'Shared apartment':
            assetTypeDesc = 'Sharing is caring, when individuals become a group.'
            break;
    }

    if (houseRules.isSmoking && houseRules.isPets) {
        houseRulesDesc = 'Host Allow smoking and pets in the compound.'
    } else if (houseRules.isSmoking && !houseRules.isPets) {
        houseRulesDesc = 'Host Allow smoking but pets is not a good idea.'
    } else {
        houseRulesDesc = 'Host doesn’t allow pets or smoking around the compound.'
    }

    return (
        <div className="about-asset-container">
            <div>
                <FontAwesomeIcon icon={faHome} size="2x" />
                <div>
                    <h4>{type}</h4>
                    <p>{assetTypeDesc}</p>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faHandSparkles} size="2x" />
                <div>
                    <h4>Enhanced Clean</h4>
                    <p>This host committed to Airdod's 5-step enhanced cleaning process.</p>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faBook} size="2x" />
                <div>
                    <h4>House rules</h4>
                    <p>{houseRulesDesc}</p>
                </div>
            </div>
        </div>
    )
}