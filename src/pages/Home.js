import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import data from '../data/data.js';
import Navigation from './Navigation';


function Home() 
{
    // let [text, setText] = useState('');
    // fetch("http://localhost:1111/testAPI/",{
    //     method: 'GET',
    //     // mode: 'cors',
    //     headers: {
    //         'Access-Control-Allow-Origin':'*',
    //         'Content-Type': 'application/json'
    //     }
    // }).then(res => res.text()).then(data => {
    //     console.log(data);
    // });
    let text = "";
    return (
        <>
            <Navigation></Navigation>
            <div className = "section">
                <h2 className = "medium">restaurants {text}</h2>
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