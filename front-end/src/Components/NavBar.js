import { NavLink } from "react-router-dom";
import "./NavBar.css"
// import logo from "./Images/logo.jpeg"

const NavBar = () => {
  return (
//  <div>
//     <nav className="nav-div">
//     <section className="top-nav">
//         <NavLink className="about" to="/about">About</NavLink>
//         <NavLink className="services" to="/services">Services</NavLink>
//         <NavLink className="home" to="/home">Home</NavLink>
//         <NavLink className="contact" to="/contact">Contact</NavLink>
//         </section>
  

//     </nav>
 
//     </div>
<div className="div-nav">
      <div className="corner-fix">
       <NavLink className="home" to="/ ">Home</NavLink>
         <NavLink className="services" to="services/ ">Training Calendar</NavLink>
       <NavLink className="contact" to="/contact">Contact</NavLink>
          <NavLink className="resources" to="/resources">Family Resources</NavLink>
        <div className="dropdown">
          {/* <div className="dropbtn">Special Education Resources</div> */}
          <div className="dropdown-content">
            <a
              href="https://www.uber.com/us/en/drive/tax-information/"
              target="blank"
            >
              Uber
            </a>
            <a href="https://www.lyft.com/driver/taxes" target="blank">
              Lyft
            </a>
            {/* This link will change */}
            <a
              href="https://www.irs.gov/newsroom/heres-the-411-on-who-can-deduct-car-expenses-on-their-tax-returns"
              target="blank"
            >
              IRS
            </a>
          </div>
        </div>
        {/* <div onClick={handleLogout}>Logout</div> */}
      </div>
    </div>
  );
};

export default NavBar;