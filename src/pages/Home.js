import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import data from '../data/data.js';


function Home() 
{
    return (
        <>
            <div className = "hero"> 
                <div className = "nav">
                    <h1>spoons</h1>
                </div>
                <div className = "content">
                    <input placeholder="Search for food..." />
                </div>
            </div>
            <div className = "section">
                <h2 className = "medium">restaurants</h2>
                <div className = "filters">
                    <span className = "button"></span>
                </div>
                <div className = "gallery">                
                    {data.map(item => { 
                        return(
                            <Link to = {`/item/${item.id}`}>
                                <Card item = {item} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home;