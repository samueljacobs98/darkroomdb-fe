import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Film from "./Pages/Film/Film";
import Home from "./Pages/Home/Home";
import New from "./Pages/New/New";
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/film/:id" element={<Film />} />
        <Route path="/film/new" element={<New />} />
      </Routes>
    </Router>
  );
}

export default App;
