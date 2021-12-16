import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Navbar extends React.Component {
  render() {
    return (<div className="Navbar">
      <Link to="/">
        <img className="pet-logo"
        src="https://i.pinimg.com/originals/af/fb/c9/affbc96be98edecba473e0e630069b3b.png"
        alt="pet logo" 
        />
        </Link>
      <Link to="/pets">Pets</Link>
      <Link to="/employees">Employees</Link>
    </div>
    );
  }
}

export default Navbar;