import { useState } from "react";
import restaurants from "../data/restaurants";
import RestaurantCard from "./RestaurantCard";
import SearchRestaurant from "./SearchRestaurant";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(restaurants);
    let restorentData = <h4>No Records found</h4>
    if(restaurantList.length > 0){
        restorentData = restaurantList.map((restaurant) =><RestaurantCard key={restaurant.data.id} {...restaurant.data} />);
    }
    
    
    const onSerachHandler = (searchText) =>{
     //  const dddd = restaurantList.filter((resurent) => resurent.data.indcludes(searchText));
     if(searchText.trim().length === 0){
        setRestaurantList(restaurants);
        return;
     }

     setRestaurantList(restaurantList.filter((restaurant) => restaurant.data.name.includes(searchText)));
    }

    const onSerachClearHandler = () =>{
        setRestaurantList(restaurants);
        return;
    }
    return (
        <>
        <SearchRestaurant onSearch={onSerachHandler} onClear={onSerachClearHandler}/>
        <section className="container">
            {restorentData};
        </section>
        </>
        
    )
}

export default Body;