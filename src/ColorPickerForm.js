import React from 'react'
import { Button } from '@material-ui/core';
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  picker: {
    width: "100% !important",
    marginTop: "2rem"
  },
  addColor: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "2rem"
  },
  colorNameInput: {
    width: "100%",
    height: "70px",
    fontSize: "10rem"
  }
}))

export default function ColorPickerForm(props) {
  const classes = useStyles();

  const {
    updateCurrentColor,
    addNewColor,
    handleChangeColor,
    currentColor,
    newColorName,
    paletteIsFull
  } = props;
  return (
    <div className={classes.root}>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        className={classes.picker}
      />

      <ValidatorForm onSubmit={addNewColor}>
        <TextValidator
          value={newColorName}
          placeholder="Color Name"
          onChange={handleChangeColor}
          variant="filled"
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={["this field is required", "please use unique name", "color already used"]}
          className={classes.colorNameInput}
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: paletteIsFull
              ? "grey"
              : currentColor
          }}
          type="submit"
          disabled={paletteIsFull}
          className={classes.addColor}
        >
          {paletteIsFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  )
}
