import React from "react";
import "./home.css";
function Home() {
  return (
    <>
      <body>
        <section className="container">
          <div className="main">
            <h2 className="title">Pomodoro</h2>
            <h1 className="main-msg">
              Master your minutes to master your life.
            </h1>
            <button className="btn btn-start">Get Started</button>
          </div>
          <div className="img-div">
            <img className="hero-img" src="assets/images/pomo.png" alt="img" />
          </div>
        </section>

        <footer>Made with code by Kavya</footer>
        <script src="index.js"></script>
      </body>
    </>
  );
}

export default Home;
