export function CityCard({ title, imgUrl, onSelect }) {

    const url = `https://res.cloudinary.com/duhcvi6p4/image/upload/v1622304703/${imgUrl}.jpg`

    return (
        <div
            onClick={() => onSelect(title)}
            className={`${title}-card card`}
        >
            <div className="img-container">
                <img src={url} alt="user"/>
            </div>
            <div className={`bg-filter ${title}`}>
                <h3>{title}</h3>
            </div>
        </div>
    )
}