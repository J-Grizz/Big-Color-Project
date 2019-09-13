import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";


class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 }
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level })
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => {
      return <ColorBox background={color.hex} name={color.name} />
    })

    return (
      <div className='Palette'>
        <Navbar sliderChange={this.changeLevel} level={level} />
        {/* Navbar goes here */}
        <div className='Palette-colors'>
          {colorBoxes}
        </div>
        {/* footer eventually */}
      </div>
    );
  }
}
export default Palette;
