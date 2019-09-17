import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom"
import PaletteMetaForm from "./PaletteMetaForm";
import useStyles from "./styles/PaletteFormNavStyles"

export default function PaletteFormNav(props) {
  const classes = useStyles();
  const [formShowing, setFormShowing] = React.useState(false)
  const {
    open,
    newPaletteName,
    handleDrawerOpen,
    handlesSubmit,
    handleChangePalette
  } = props;

  function handleClickOpen() {
    setFormShowing("namePaletteStage");
  }

  function handleClickSave() {
    setFormShowing("emojiPickerStage")
  }

  function handleClose() {
    setFormShowing(false);
  }

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <AddToPhotosIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Palette Builder
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>

          <PaletteMetaForm
            newPaletteName={newPaletteName}
            handlesSubmit={handlesSubmit}
            handleChangePalette={handleChangePalette}
            formShowing={formShowing}
            handleClose={handleClose}
            handleClickSave={handleClickSave}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            className={classes.button}
          >
            Save New Palette
          </Button>
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Back
              </Button>
          </Link>
        </div>
      </AppBar>
    </div>
  )
}
