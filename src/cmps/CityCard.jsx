import { Link } from "react-router-dom"

export function CityCard({ title, imgUrl, onSelectCity }) {

    return (
        <Link to="/stay" onClick={() => { onSelectCity() }}>
            <div className={` ${title}-card card`}>

                <div className="img-container">
                    <img src={`https://res.cloudinary.com/duhcvi6p4/image/upload/v1622304703/${imgUrl}.jpg`} alt={title} />
                </div>
                <div className={`bg-filter ${title}`}>
                    <h3>{title}</h3>
                </div>
            </div>
        </Link>
    )
}
