import Home from "./pages/Home/Home";
// import Timer from "./pages/Timer/Timer";
// import Tasks from "./pages/Tasks/Tasks";

import "./pages/Home/home.css";
import { Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul className="list-non-bullet  nav-menu">
            <li className="list-item-inline">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="list-item-inline">
              <Link className="link" to="/tasks">
                Tasks
              </Link>
            </li>
            <li className="list-item-inline">
              <Link className="link" to="/timer">
                Timer
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* <Route path="/timer" element={<Timer />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/tasks" element={<Tasks />} /> */}
        </Routes>
      </div>
      <footer>Made with code by Kavya</footer>
    </div>
  );
}

export default App;
