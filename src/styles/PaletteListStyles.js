import sizes from "./sizes"
import bg from "./bg.svg"

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1,
      scale: 10
    },
    ".fade-exit-active": {
      scale: 0,
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#1e3ce6",
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    overflow: "scroll",
    overflowX: "auto",
    overflowY: "auto"
  },
  container: {
    width: "60%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "70%"
    },
    [sizes.down("lg")]: {
      width: "80%"
    },
    [sizes.down("md")]: {
      width: "90%"
    },
    [sizes.down("xs")]: {
      width: "70%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    margin: "20px 0",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white"
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    marginBottom: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 32%)",
    gridGap: "1.5rem",
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 49%)",
      gridGap: "1rem"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: ".6rem"
    }
  },
}