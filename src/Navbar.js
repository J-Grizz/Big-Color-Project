import React, { Component } from 'react'
import Slider from "rc-slider";
import { Link } from "react-router-dom";
import {
  Select,
  MenuItem,
  Snackbar,
  IconButton
} from "@material-ui/core"
import { Close } from "@material-ui/icons"

import 'rc-slider/assets/index.css';
import "./Navbar.css"


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      format: "hex",
      open: false
    }
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleFormatChange(e.target.value);
  }
  closeSnackBar() {
    this.setState({ open: false })
  }

  render() {
    const { level, sliderChange } = this.props;
    const { format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">React Color Picker</Link>
        </div>
        <div className="slider-container">
          <div className="slider">
            <Slider defaultValue={level} step={100} min={100} max={900} onAfterChange={sliderChange} />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, .1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackBar}
          action={[
            <IconButton
              onClick={this.closeSnackBar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <Close />
            </IconButton>
          ]}
        />
      </header>
    )
  }
}

export default Navbar;