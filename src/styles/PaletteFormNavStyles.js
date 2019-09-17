import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from "../constants";
import sizes from "./sizes"

const drawerWidth = DRAWER_WIDTH;


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  hide: {
    display: 'none',
  },
  appBar: {
    backgroundColor: "white",
    color: "black",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px",
    alignItems: "center"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none"
    },
    [sizes.down("sm")]: {
      marginRight: "0.3rem"
    }
  },
  button: {
    margin: "0 1px",
  }
}))



export default useStyles;