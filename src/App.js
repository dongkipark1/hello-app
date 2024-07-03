import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import About from "./page/About";
import Home from "./page/Home";
import Info from "./page/Info";
import LoginComplete from "./LoginComplete";
import Login from "./Login";
import List from "./page/List";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginComplete" element={<LoginComplete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;