import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../styles/theme";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
      </ThemeProvider>
    );
  }
}

export default App;
