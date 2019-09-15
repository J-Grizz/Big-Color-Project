import React, { Component } from 'react'

import { withStyles } from "@material-ui/styles";
import { Close } from "@material-ui/icons"
import { Link } from "react-router-dom";
import {
  Select,
  MenuItem,
  Snackbar,
  IconButton
} from "@material-ui/core"

import Slider from "rc-slider";

import 'rc-slider/assets/index.css';
import styles from "./styles/NavbarStyles"

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
    const { level, sliderChange, showingAllColors, classes } = this.props;
    const { format } = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">React Color Picker</Link>
        </div>
        {
          showingAllColors && (
            <div>
              <div className={classes.slider}>
                <Slider
                  defaultValue={level}
                  step={100}
                  min={100}
                  max={900}
                  onAfterChange={sliderChange}
                />
              </div>
            </div>
          )
        }
        <div className={classes.selectContainer}>
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
      </header >
    )
  }
};

export default withStyles(styles)(Navbar);