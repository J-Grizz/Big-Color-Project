import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const MiniPalette = React.memo((props) => {
  // const [delePalette, setDeletePalette]
  const { classes, paletteName, emoji, colors, goToPalette, handleToggle, id } = props;
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ))

  function handleClick() {
    goToPalette(id)
  }

  function handleDeleteButton(e) {
    e.stopPropagation()
    handleToggle(id)
  }

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteOutlinedIcon
        onClick={handleDeleteButton}
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
})

export default withStyles(styles)(MiniPalette);