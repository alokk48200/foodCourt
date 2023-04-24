
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

 const RestaurantsMenu=()=>{
    const [restaurant2, setRestaurant2]=useState({});
         console.log("Alok");
       useEffect(()=>{
         getReastaurantinfo();
       }, [])
        
     const {rsid}=useParams();
     async function getReastaurantinfo(){
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4358011&lng=81.846311&restaurantId="+rsid+"&submitAction=ENTER");
        const data1= await data.json();
        console.log(data1);
        setRestaurant2(data1);
     }
    
    return (restaurant2===null)?(<h1>hello</h1>):(
     
        <div className="show1">
         <div>
        {console.log(restaurant2)}
        <h2>Restaurants id:{restaurant2?.data?.cards[0]?.card?.card?.info?.id }</h2>
        <h1>{restaurant2?.data?.cards[0]?.card?.card?.info?.name}</h1>
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurant2?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId} ></img>
        <h5>rating 4.4</h5>
        {console.log("hello")}
        </div>
        <div className="menu">
         <ul>
            <h1>Menu</h1>
         {console.log("hello1")}
           { (restaurant2?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map( (item)=>{
                 {console.log("hello2")}
               {return   item?.card?.card?.itemCards?.map((item1)=>{
                

                  return <li key={item1?.card?.info?.id}>
                     <h5>{item1?.card?.info?.name   }&nbsp;&nbsp;</h5>
                    <h3>{  item1?.card?.info?.price/100}</h3>
                     </li>
               })
            }
            })  )
         }
         </ul>
         </div>
        </div>
    )
 }
 export default RestaurantsMenu;