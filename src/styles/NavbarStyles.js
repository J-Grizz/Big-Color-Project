import sizes from "./sizes"

export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
    [sizes.down("xs")]: {
      height: "12vh",
    }
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginRight: "16px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "\"Roboto\"",
    height: "100%",
    "& a": {
      "textDecoration": "none",
      "color": "black"
    }
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus .rc-slider-handle:hover": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      margin: "-3px 0 0 -3px",
    },
    [sizes.down("sm")]: {
      width: "150px",
      marginRight: "10px"
    }
  },
  selectContainer: {
    display: "inline-block",
    marginLeft: "auto",
    marginRight: "20px",
  }
}