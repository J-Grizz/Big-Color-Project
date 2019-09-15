export default {
  Palette: {
    height: "99.2vh",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%"
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    backgroundColor: "black",
    "& a": {
      color: "white",
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
    }
  }
};