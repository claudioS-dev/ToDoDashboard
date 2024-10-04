import { useState } from "react";
import { Router } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/about">
            <h1>Hola About</h1>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
