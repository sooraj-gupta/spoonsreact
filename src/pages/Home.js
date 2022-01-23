import React from 'react';



let data = [
    {
        "name": "La Cueva",
        "rating": "5.0",
        "thumbnail": "https://cdn.usarestaurants.info/assets/uploads/b0aed096bb987fc9aba6e906227fce60_-united-states-california-santa-clara-county-saratoga-503753-la-cuevahtm.jpg",
        "tags": "Mexican, Dine In",
        "price": "$$",
        "distance": "",
    },
    {
        "name": "Go Fish Poke Bar",
        "rating": "5.0",
        "thumbnail": "http://www.gofishpoketexas.com/wp-content/uploads/2017/02/hp-banner.jpg",
        "tags": "Hawaiian, Poke Bar, Dine In",
        "price": "$$",
    },
    {
        "name": "L&L hawaiian bbq",
        "rating": "5.0",
        "thumbnail": "https://images.prismic.io/hawaiianbarbecue/9de1473d-1442-4a3c-8be7-e9ed3c4319d6_L%26L_mixedplate0527.jpg?auto=compress%2Cformat&w=1000",
        "tags": "Hawaiian, BBQ, Dine In",
        "price": "$$",
    },
    {
        "name": "McDonalds",
        "rating": "3.0",
        "thumbnail": "https://cdn.usarestaurants.info/assets/uploads/e39afe958eeaaa08cac830611447ae02_-united-states-california-santa-clara-county-saratoga-861967-mcdonaldshtm.jpg",
        "tags": "Fast Food, American, Burger",
        "price": "$",
    },
    {
        "name": "Myungrang",
        "rating": "5.0",
        "thumbnail": "https://cdn.vox-cdn.com/thumbor/n4sx01x1KR4zqipSHH46Sy2fC4A=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16021422/Myungrang_Hot_Dog.jpg",
        "tags": "Korean, Dine In",
        "price": "$$",
    },
    {
        "name": "Popeyes",
        "rating": "4.0",
        "thumbnail": "https://media.newyorker.com/photos/5d5c40f07ec6dc000826edfa/master/pass/Rosner-Popeyes-Primary.jpg",
        "tags": "Fast Food, American, Fried-Chicken",
        "price": "$$",
    },
    {
        "name": "Pacific Catch",
        "rating": "4.0",
        "thumbnail": "https://pacificcatch.com/wp-content/uploads/2020/08/Catering-Private-events-1024x766-1.png",
        "tags": "Seafood, Dine In",
        "price": "$$$",
    },
    {
        "name": "Chipotle",
        "rating": "4.0",
        "thumbnail": "https://img.ctykit.com/cdn/va-rosslyn/images/tr:w-1800/chipotle---web.png",
        "tags": "Mexican, Fast-Food",
        "price": "$$",
    },
    {
        "name": "Starbucks",
        "rating": "5.0",
        "thumbnail": "https://hips.hearstapps.com/womenshealth-production.s3.amazonaws.com/images/8777/starbucks-menu__medium_4x3.jpg",
        "tags": "Cafe, Coffee",
        "price": "$$",
    }
]


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
                <div class = "gallery">                
                    {data.map(item => { 
                        
                    let stars = '&starf;'.repeat( item.rating ) + '&star;'.repeat( 5 - item.rating );

                    return(
                        <div className = "item">
                            <div class="image" style = {{ backgroundImage: `url('${item.thumbnail}')` }}>
                                <span class="distance">3 min</span>
                            </div>
                            <div class="content">
                                <p class="name">{item.name}</p>
                                <p class="rating">{stars} {item.rating}</p>
                                <p class="priceandtags">{item.price} &middot; {item.tags}</p>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </>
    )
}

export default Home;