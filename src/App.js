import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Second } from "./components/Second";
import { First } from "./components/First";

function App() {
  return (
    <Routes>
      <Route path="/" element={<First />}></Route>
      <Route path="/2nd" element={<Second />}></Route>
    </Routes>
  );
}
export default App;
