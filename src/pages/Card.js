import React from "react";

function Card(props) 
{  
    let item = props.item;
    let stars = "★".repeat( item.rating ) + "☆".repeat( 5 - item.rating );

    return(
        <div className = "item">
            <div className="image" style = {{ backgroundImage: `url('${item.thumbnail}')` }}>
                <span className="distance">3 min</span>
            </div>
            <div className="content">
                <p className="name">{item.name}</p>
                <p className="rating">{stars} {item.rating}</p>
                <p className="priceandtags">{item.price} &middot; {item.tags}</p>
            </div>
        </div>
    )
}

export default Card;