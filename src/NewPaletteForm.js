import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';
import DraggableColorList from "./DraggableColorList"
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import useStyles from "./styles/NewPaletteFormStyles"

NewPaletteForm.defaultProps = {
  maxColors: 20
}

export default function NewPaletteForm(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentColor, setcurrentColor] = useState("teal");
  const [colors, setColors] = useState([...props.palettes[0].colors]);
  const [newColorName, setNewColorName] = useState("");
  const [newPaletteName, setNewPaletteName] = useState("");
  const paletteIsFull = colors.length >= props.maxColors;

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    });
    ValidatorForm.addValidationRule('isColorUnique', (value) => {
      return colors.every(
        ({ color }) => color !== currentColor
      )
    });
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
      return props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    });
  });

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function updateCurrentColor(newColor) {
    setcurrentColor(newColor.hex);
  }

  function addNewColor() {
    const newColor = { color: currentColor, name: newColorName }
    setColors([...colors, newColor])
  }

  function handleChangeColor(e) {
    setNewColorName(e.target.value)
  }

  function handleChangePalette(e) {
    setNewPaletteName(e.target.value)
  }

  function deleteColor(colorName) {
    let newColors = colors.filter(color => color.name !== colorName)
    setColors(newColors)
  }

  function addRandomColor() {
    const allColors = props.palettes.map(p => p.colors).flat();
    const newRandomColor = () => allColors[Math.floor(Math.random() * allColors.length)];
    let randomColor;
    function colorChecker() {
      randomColor = newRandomColor();
      colors.forEach(color => color.name === randomColor.name && colorChecker())
    }
    colorChecker()
    setColors([...colors, randomColor])
  }

  function clearColors() {
    setColors([])
  }

  function handlesSubmit(emoji) {
    let newName = newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      emoji: emoji,
      colors: colors
    };
    props.savePalette(newPalette);
    props.history.push("/");
  }

  function onSortEnd({ oldIndex, newIndex }) {
    setColors(arrayMove(colors, oldIndex, newIndex))
  }

  return (
    <div className={classes.root}>

      <PaletteFormNav
        handleDrawerOpen={handleDrawerOpen}
        handleChangePalette={handleChangePalette}
        handlesSubmit={handlesSubmit}
        newPaletteName={newPaletteName}
        open={open}
        classes={classes}
      />

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <Divider />

        <div className={classes.drawerContainer}>
          <Typography variant="h4">Color Editor</Typography>

          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={paletteIsFull}
              className={classes.button}
            >
              {paletteIsFull ? "Palette Full" : "Random Color"}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={clearColors}
            >
              Clear Palette
          </Button>
          </div>

          <ColorPickerForm
            updateCurrentColor={updateCurrentColor}
            addNewColor={addNewColor}
            handleChangeColor={handleChangeColor}
            currentColor={currentColor}
            newColorName={newColorName}
            paletteIsFull={paletteIsFull}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          deleteColor={deleteColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div >
  );
}

