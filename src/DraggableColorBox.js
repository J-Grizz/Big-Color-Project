import React from 'react'
import { withStyles } from "@material-ui/styles";
import { SortableElement } from "react-sortable-hoc"
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import styles from "./styles/DraggableColorBoxStyles"

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

