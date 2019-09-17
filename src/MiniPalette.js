import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


function MiniPalette(props) {
  // const [delePalette, setDeletePalette]
  const { classes, paletteName, emoji, colors, handleClick, handleDelete, id } = props;
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ))

  function deletePalette(e) {
    e.stopPropagation()
    handleDelete(id)
  }

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteOutlinedIcon
        onClick={deletePalette}
        className={classes.deleteIcon}
      />
      <div className={classes.colors}>
        {miniColorBoxes}
      </div>
      <h5 className={classes.title}>
        {paletteName}
        <span>
          {emoji}
        </span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);