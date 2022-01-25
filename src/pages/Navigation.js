import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { IoSearchSharp, IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function Navigation() 
{
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        }, []
    );

    
    return(
        <div style = {styles.nav}>
            <div style = {{...styles.navItem, ...styles.left}}>
                <div style = {styles.search}>
                    <IoHome style = {{paddingRight: "10px"}} />
                    <input id = "address" style = {styles.searchInput} placeholder="Your Address" defaultValue = "1165 W El Camino Real" />
                </div>
            </div>
            <div style = {{...styles.navItem, ...styles.middle}}>
                <Link to = "/" style = {{textDecoration:"none"}}>
                    <h2 style = {{fontWeight: "600", color: "green"}}>spoons</h2>
                </Link>
            </div>
            <div style = {{...styles.navItem, ...styles.right}}>
                <div style = {styles.search}>
                    {
                        () => {
                            if( windowDimensions.width < 600 )
                            {
                                return <IoSearchSharp style = {{paddingRight: "10px"}} />
                            }
                        }
                    }
                    <IoSearchSharp style = {{paddingRight: "10px"}}></IoSearchSharp>
                    <input style = {styles.searchInput} placeholder="Search for food..." />
                </div>
            </div>
        </div>
    )
}


let styles = {
    nav:
    {
        display: "flex",
        padding: "0px 20px",
        borderBottom: "1px solid #eee"
    },
    navItem: 
    {
        flex: 1,
        display: "flex",
        alignItems: "center",
    },
    left:
    {
        justifyContent: "flex-start",
    },
    middle:
    {
        justifyContent: "center",
    },
    right:
    {
        justifyContent: "flex-end",
    },
    search:
    {
        margin: "0px",
        outline: "none",
        fontFamily: 'Outfit',
        fontSize: "20px",
        backgroundColor: "#f0f0f0f0",
        borderRadius: "100px",
        padding: "5px 10px",
        maxWidth: "800px",
        width: "75%",
        border: "none",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
    },
    searchInput:
    {
        width: "100%",
        border: "none",
        outline: "none",
        fontFamily: 'Outfit',
        fontSize: "15px",
        backgroundColor: "transparent"
    }
}


export default Navigation;