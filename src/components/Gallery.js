import React from "react"
import "./css/Gallery.css"
function Gallery( props )
{
    return(
        <>
            <div className="image" style = {{ 
                backgroundImage: `url('${props.thumbnail}')`,
                position: 'relative',

            }}>
                <div style = {{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    backgroundColor: "#eee",
                    opacity: "0.7",
                    // marginTop: "10px",
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                    position: "absolute",
                    bottom: "0px",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}>
                    {props.photos && props.photos.map( photo => {
                    return <div className="galleryImage" style = {{ 
                        backgroundImage: `url('${photo}')`,
                    }}></div>
                })}
                </div>
            </div>
        </>
    )
}

let styles = {
}

export default Gallery;