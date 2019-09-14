import React, { Component } from 'react'
import CopyToClipBoard from "react-copy-to-clipboard"
import chroma from "chroma-js";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import "./ColorBox.css"

const styles = {
  ColorBox: {
    width: "20%",
    height: props => props.showingFullPalette ? "25%" : "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1"
    }
  },
  copyText: {
    color: props => chroma(props.background).luminance() >= .7 ? "black" : "white"
  },
  colorName: {
    color: props => chroma(props.background).luminance() <= .07 ? "white" : "black"
  },
  seeMore: {
    color: props => chroma(props.background).luminance() >= .6 ? "rgba(0,0,0,0.8)" : "white",
    background: "rgba(255, 255, 255, .3)",
    position: "absolute",
    border: "none",
    right: "0",
    bottom: "0",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  copyButton: {
    color: props => chroma(props.background).luminance() >= .6 ? "rgba(0,0,0,0.8)" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "calc(50% - 15px)",
    left: "calc(50% - 50px)",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, .3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textDecoration: "none",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
    opacity: "0"
  },
  boxContent: {
    position: "absolute",
    width: "85%",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(.1)",
    transition: "transform 0.6s ease-in-out",
  },
  showOverlay: {
    position: "absolute",
    opacity: "1",
    transform: "scale(10)",
    zIndex: "10",
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    top: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(.1)",
    opacity: "0",
    color: "white",
    transitionDelay: ".2s",
    zIndex: "-1",
    "& h1": {
      textAlign: "center",
      textShadow: "1px 2px black",
      fontWeight: "400",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
    },
    "& p": {
      fontSize: "1.5rem",
      fontWeight: "100",
    }
  },
  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "11",
    transition: "all .3s ease-in",
  }
}

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    }
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1000)
    })
  }

  render() {
    const { name, background, paletteId, id, showingFullPalette, classes } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipBoard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${copied && classes.showOverlay} `
            }>
          </div>
          <div className={`${classes.copyMessage} ${copied && classes.showMessage} `}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipBoard>
    )
  }
}

export default withStyles(styles)(ColorBox);
