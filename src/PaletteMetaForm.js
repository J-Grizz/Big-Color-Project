import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from "emoji-mart";
import 'emoji-mart/css/emoji-mart.css'

export default function AlertDialog(props) {
  const {
    newPaletteName,
    handlesSubmit,
    handleChangePalette,
    formShowing,
    handleClose,
    handleClickSave
  } = props;

  function savePalette(emoji) {
    handlesSubmit(emoji.native)
  }

  return (
    <div>
      <Dialog
        open={formShowing === "emojiPickerStage"}
        onClose={handleClose}
      >
        <Picker
          title='Pick your emoji…'
          emoji='point_up'
          onSelect={savePalette}
        />
      </Dialog>

      <Dialog
        open={formShowing === "namePaletteStage"}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <ValidatorForm onSubmit={handleClickSave}>
          <DialogTitle id="alert-dialog-title">{"What will it be called?"}</DialogTitle>
          <DialogContent>
            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              onChange={handleChangePalette}
              name="newPaletteName"
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Enter palette Name", "Name Already In Use"]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
            >
              Save palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}