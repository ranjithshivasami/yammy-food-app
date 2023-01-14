const RestaurantCard = (props) => {    
    const imageBaseUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill';
    return (
    <div key={props.id} className="restaurant-card">
        <img src={`${imageBaseUrl}/${props.cloudinaryImageId}`} alt="restotrnt" />
        <h3>{props?.name}</h3>
        <p>Cuisines : {props?.cuisines.join(', ')}</p>
        <p>{props.area}</p>
    </div>
    )
};

export default RestaurantCard