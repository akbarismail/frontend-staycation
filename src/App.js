import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";

import "assets/scss/style.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
