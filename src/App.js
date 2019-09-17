import { Route, Switch } from 'react-router-dom'
import React, { Component } from "react";

import SingleColorPalette from "./SingleColorPalette"
import { generatePalette } from "./colorHelpers"
import NewPaletteForm from "./NewPaletteForm"
import PaletteList from "./PaletteList"
import seedColors from "./seedColors";
import Palette from "./Palette";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    })
  }

  deletePalette(id) {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    )
  }

  savePalette(newPalette) {
    this.setState((st) => (
      { palettes: [...st.palettes, newPalette] }

    ), this.syncLocalStorage)
  }

  syncLocalStorage() {
    window.localStorage.setItem("palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList
              palettes={this.state.palettes}
              deletePalette={this.deletePalette}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/palette/new"
          render={(routeProps) =>
            <NewPaletteForm
              savePalette={this.savePalette}
              palettes={this.state.palettes}
              {...routeProps}
            />
          }
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(this.findPalette(routeProps.match.params.id))}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorPalette
              palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
              colorId={routeProps.match.params.colorId}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
