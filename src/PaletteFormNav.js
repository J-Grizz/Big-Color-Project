import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 400;


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px"
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

  }

}))

export default function PaletteFormNav(props) {
  const classes = useStyles();
  const {
    open,
    newPaletteName,
    handleDrawerOpen,
    handlesSubmit,
    handleChangePalette
  } = props;

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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Palette Builder
          </Typography>
        </Toolbar>

        <div className={classes.navBtns}>
          <ValidatorForm onSubmit={handlesSubmit}>
            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              onChange={handleChangePalette}
              name="newPaletteName"
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Enter palette Name", "Name Already In Use"]}
            />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
            >
              Save palette
          </Button>
          </ValidatorForm>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Back
              </Button>
          </Link>
        </div>

      </AppBar>

    </div>
  )
}