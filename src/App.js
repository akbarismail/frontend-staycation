import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "pages/LandingPage";

import "assets/scss/style.scss";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/" component={LandingPage}></Route> */}
          <Route exact path="/" component={Example}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
