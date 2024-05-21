import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import { useState } from "react";
export default function Sidebar() {
    const[show , setshow] = useState(false)
  return (
    <div className={show ? "sidebar1" : "sidebar"}>
      <h1>Hello</h1>
      <div className="main" onClick={()=>
     setshow(!show)

      }>
        <FontAwesomeIcon className="icon" icon={faBars} />
      </div>
      .
      <ul>
      <li>
        <FontAwesomeIcon className="icon" icon={faHouse} />
        {show ? "" :  <a href="#">Home</a> }
        
        </li>
        <li>
        <FontAwesomeIcon className="icon" icon={faGauge} />
        {show ? "" :  <a href="#">dashboard</a> }
        
        </li>
        
        <li>
        <FontAwesomeIcon className="icon" icon={faGear} />
        {show ? "" :  <a href="#">Setting</a> }
        
        </li>
        <li>
        <FontAwesomeIcon className="icon" icon={faUser} />
        {show ? "" :  <a href="#">MyProfile</a> }
        
        </li>
        <li>
        <FontAwesomeIcon className="icon" icon={faAddressCard} />
        {show ? "" :  <a href="#">Aboutus</a> }
        
        </li>
      </ul>
    </div>
  );
}
