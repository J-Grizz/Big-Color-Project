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
    this.savePalette = this.savePalette.bind(this);
  }

  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    })
  }

  savePalette(newPalette) {
    console.log(newPalette)
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList
              palettes={seedColors}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/palette/new"
          render={() => <NewPaletteForm savePalette={this.savePalette} />}
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
