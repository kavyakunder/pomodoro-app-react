import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
function Home() {
  return (
    <>
      <main className="body-container">
        <section className="container">
          <div className="main">
            <h2 className="title">Pomodoro</h2>
            <h1 className="main-msg">
              Master your minutes to master your life.
            </h1>
            <Link to="/tasks">
              <button className="btn btn-start">Get Started</button>
            </Link>
          </div>
          <div className="img-div">
            <img className="hero-img" src="assets/images/pomo.png" alt="img" />
          </div>
        </section>

        {/* <footer>Made with code by Kavya</footer> */}
        <script src="index.js"></script>
      </main>
    </>
  );
}

export default Home;
