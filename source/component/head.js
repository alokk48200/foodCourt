
import { Link } from "react-router-dom"



const Title=()=>{
    return (
        <a href='\'>
        <img alt="logo" className='logo' src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?size=626&ext=jpg"/>
        </a>
    )
}
const Header=()=>{
    return (
     <div className="header">
         <Title/>
     <div className='nav-items'>
        
        <ul>
         <li>
            <Link to="/">Home</Link>
         </li>
         <li><Link to='./Aboutus'>Aboutus</Link></li>
         <li >contact us</li>
         <li>Location</li>
        </ul>
     </div>
     </div>
    )
 }
export   default  Header;