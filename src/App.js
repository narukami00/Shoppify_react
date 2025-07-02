import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SummerCollectionPage from "./components/SummerSection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/summer" element={<SummerCollectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
