import { useEffect, useState } from "react";
import Shimmer from "../shimmer";
import { Link } from "react-router-dom";


function filterdata(searchtxt, Restaurants){
    const rest=Restaurants;
    return rest.filter((x)=>{
        return x.data.name.toLowerCase().includes(searchtxt.toLowerCase());
    })
}

const Card=(props)=>{
    
    const x=props.y;
 
  ///const newsrc=res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill;
    
  return (
     
      
      <div className='card'>
          
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+x.data.cloudinaryImageId}/>
                <h1>{x.data.name}</h1>
                <h5 id="cuisines">{x.data.cuisines.join(',')}</h5>
                <h4> {x.data.avgRating} star</h4>
       </div>
      )
}

const Body=()=>{
            
const [restaurants1, setRestaurants1]=useState([]);
           const  [searchtxt, setsearchtxt]=useState();

           useEffect(()=>{
            getReastaurants();
           }, [searchtxt])
         async function getReastaurants(){
             const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
             const json= await data.json();
             ///console.log(json.data.cards[2].data.data);
             setRestaurants1(json?.data?.cards[2]?.data?.data?.cards);
         } 
    return (restaurants1.length === 0) ? (<Shimmer/>):(
        <div className="bodycontainer">
        <input
         type="text"
          placeholder="search"
           value={searchtxt}
           onChange={
            (e)=>{
            setsearchtxt(e.target.value);
           }}
           />
        <button onClick={()=>{
            const data=filterdata(searchtxt, restaurants1);
            setRestaurants1(data);
         
        }
        }>Search</button>
         
     <div className="bodycard">
        
       { 
          
       restaurants1.map((x)=>{
           
              
         
             return (
              <Link to={"./restaurant/"+x.data.id} key={x.data.id}  ><Card  y={x}  /> </Link>);
           
        }) 
        }
        
        
        </div>
        </div>
            
    )
        
    
}
 export default Body;