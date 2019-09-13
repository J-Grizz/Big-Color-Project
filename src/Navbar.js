import React, { Component } from 'react'
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import "./Navbar.css"


class Navbar extends Component {

  render() {
    const { level, sliderChange } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="SOMOETHING">React Color Picker</a>
        </div>
        <div className="slider-container">
          <div className="slider">
            <Slider defaultValue={level} step={100} min={100} max={900} onAfterChange={sliderChange} />
          </div>
          <span></span>
        </div>
      </header>
    )
  }
}

export default Navbar;