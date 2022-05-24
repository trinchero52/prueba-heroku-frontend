import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MostrarPersonas from "./components/MostrarPersonas/MostrarPersonas";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={MostrarPersonas}>
          <MostrarPersonas />
        </Route>
      </Router>
    </div>
  );
}

export default App;
