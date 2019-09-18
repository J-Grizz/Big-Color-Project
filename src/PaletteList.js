import React, { Component } from 'react';
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./styles/PaletteListStyles"
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import List from '@material-ui/core/List';
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"
import { Avatar, ListItemText } from '@material-ui/core';
import blue from "@material-ui/core/colors/blue"
import red from "@material-ui/core/colors/red"


class PaletteList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openDeleteDialog: false,
      deletingId: ""
    }
    this.toggleDialog = this.toggleDialog.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.goToPalette = this.goToPalette.bind(this);
  }

  toggleDialog(id) {
    this.setState(st => {
      return {
        openDeleteDialog: !st.openDeleteDialog,
        deletingId: id
      }
    })
  }

  confirmDelete() {
    this.props.deletePalette(this.state.deletingId);
    this.toggleDialog();
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`)
  }

  render() {
    const { palettes, classes } = this.props;
    const { openDeleteDialog } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              <CSSTransition
                key={palette.id}
                classNames="fade"
                timeout={500}
              >
                <MiniPalette
                  handleToggle={this.toggleDialog}
                  goToPalette={this.goToPalette}
                  key={palette.id}
                  id={palette.id}
                  {...palette}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={this.toggleDialog}
        >
          <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
          <List>
            <ListItem
              button
              onClick={this.confirmDelete}
            >
              <ListItemAvatar>
                <Avatar
                  style={{
                    backgroundColor: blue[100],
                    color: blue[600]
                  }}>
                  <CheckIcon></CheckIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                Delete
              </ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={this.toggleDialog}
            >
              <ListItemAvatar>
                <Avatar
                  style={{
                    backgroundColor: red[100],
                    color: red[600]
                  }}>
                  <CloseIcon></CloseIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                Cancel
              </ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);