
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Form from './routes/Form';
import Todos from './routes/Todos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/todo" element={<Todos />} />
        <Route path="*" element={<div style={{ alignItems: "center", justifyContent: "center" }}>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
