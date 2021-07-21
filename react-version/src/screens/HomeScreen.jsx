import React from "react";
import "./Home.css";

function HomeScreen() {
  return (
    <div
      className="home"
      style={{
        backgroundImage:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1566&q=80",
      }}
    >
      <div className="home-btn">
          <p className="landing__text text-white">Using BlockChain to secure Real Estate</p>
        <button type="button" class="btn btn-info btn-rounded ">
          get started
        </button>
      </div>
    </div>
  );
}

export default HomeScreen;
