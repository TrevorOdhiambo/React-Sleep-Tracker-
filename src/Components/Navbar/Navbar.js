import React,{useState} from 'react'
import './navbar.css'
import { FaBars,FaTimes} from 'react-icons/fa';
const Navbar = ()=>{
  
  const [click,setClick] = useState(false)
  const handleClick = ()=>{
    setClick(!click)
  }

  return(
  
     <nav className="navbar">
       <div className='logo'> <a href="" className='logo-text'>Sleepy</a></div>
       <ul className={click ? "nav-list active" : "nav-list"}>
         <li className="nav-item">
           <a href="#">How it works</a>
         </li>
         <li className="nav-item">
           <a href="#">About</a>
         </li>
         <li className="nav-item">
           <a href="#">Sleep Sounds</a>
         </li>
         <li className="nav-item">
           <a href="#" >Sleep quiz</a>
           <span className="border"></span>
         </li>
      
         <li className="nav-item">
           <a href="#" className='signup-btn'>Try it for free</a>
         </li>
       </ul>
       <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <FaTimes className="menu-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </div>
     </nav>

  )
}

export default Navbar 