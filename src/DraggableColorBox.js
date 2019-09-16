import React from 'react'
import { withStyles } from "@material-ui/styles";
import { SortableElement } from "react-sortable-hoc"
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "rgba(0,0,0,.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  deleteIcon: {
    transition: "all .3s ease-in-out"
  }
}

const DraggableColorBox = SortableElement((props) => {

  const { color, classes, name, deleteColor } = props;

  function handleClick() {
    deleteColor(name)
  }

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteOutlinedIcon onClick={handleClick} className={classes.deleteIcon} />
      </div>
    </div>
  )
})

export default withStyles(styles)(DraggableColorBox);

