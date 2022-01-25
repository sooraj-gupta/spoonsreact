import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button.js";
import Gallery from "../components/Gallery.js";
import data from '../data/data.js';
import Navigation from "./Navigation.js";
import { GiSpoon } from "react-icons/gi";
import spoon from "../images/spoon.svg";

function Item( props )
{
    let params = useParams();
    let item = data.find( item => item.id === params.id );
    let stars = (<></>);
    for( let i = 0; i < item.rating; i++ )
    {
        stars = (<>{stars}<img src = {spoon} width="15"/></> );
    }
    for( let i = 0; i < (5 - item.rating); i++ )
    {
        stars = (<>{stars}<GiSpoon style = {{color: "#0002"}} /></>);
    }
    return(
        <>
            <Navigation></Navigation>
            <div className = "section">
                <div className = "item-header">
                    <Gallery thumbnail = {item.thumbnail} photos = {item.photos} />
                    <h1>{item.name}</h1>
                    <p className="rating">
                        <span style = {{ 
                            color: "black", 
                            fontWeight: '500', 
                            fontSize: '15px',
                            marginRight: '5px'
                        }}>{item.rating}</span> 
                        {stars}
                    </p>
                    <Button>get directions</Button>
                </div>
            </div>
        </>
    )
}
export default Item