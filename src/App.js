import React from "react";
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />

          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
