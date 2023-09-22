import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
     <div class="topnav">
  <a class="active" href="#home">Home</a>

  <a href="#Contact">MealPlans</a>
  <a href="#Contact">Recipes</a>
  <a href="#Contact">Menu</a>

  <a href="#about">About</a>
  <input type="text" placeholder="Search.."/>
</div>
);
}

export default Navbar;