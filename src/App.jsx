import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./Body";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="login/" element={<div>Login page</div>}></Route>
            <Route path="test/" element={<div>Test page</div>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
