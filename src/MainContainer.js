import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import FilterRes from './components/filterRes';
import { mockData } from './utils/constant';
import { useState } from 'react';


const MainContainer = () => {
    const [restaurants, setRestaurants] = useState(mockData.resCard);
    const [wholeRestaurants] = useState(mockData.resCard);


    return (
        <div className="mainContainer">
            <Header />
            <FilterRes restaurants={restaurants} setRestaurants={setRestaurants} wholeRestaurants={wholeRestaurants} />
            <div className="restaurant-container">
                {restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.name} restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default MainContainer;