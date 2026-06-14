const FilterRes = ({ restaurants, setRestaurants, wholeRestaurants }) => {
    return (
        <div className="filterRestaurant">
            <button className="filter-btn" onClick={() => {
                const filteredRestaurants = restaurants.filter((restaurant) => restaurant.info.rating.aggregate_rating > 4);
                setRestaurants(filteredRestaurants);
            }}>Filter</button>

            <button className="filter-btn" onClick={() => {
                setRestaurants(wholeRestaurants);
            }}>Clear Filter</button>
        </div>
    );
}

export default FilterRes;