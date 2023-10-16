import './App.css';
import { Route, Routes } from "react-router-dom";
import {Home} from "./Pages/Home";
import { Dashboard } from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
