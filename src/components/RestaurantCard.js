const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="restaurant-card" key={restaurant.resId}>
            <div className="logo">
                <img src={restaurant.info.image.url} alt={restaurant.info.name} />
            </div>
            <div className="food-details">
                <h3>{restaurant.info.name}</h3>
                <p>{restaurant.info.cuisine.map((cuisine) => cuisine.name).join(', ')}</p>
                <p>Price: {restaurant.info.cfo.text}</p>
                <p>Rating: {restaurant.info.rating.aggregate_rating}</p>
                <p>Locality: {restaurant.info.locality.name}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;