import React from "react";
import fakeStore from "../../assets/images/fake_store.png";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div>
        <a href="https://fakestoreapi.com/">
          <img src={fakeStore} alt="faje store" width={48} />
        </a>
      </div>
      <div className="title">
        <a href="/">
          <h1>FAKE STORE</h1>
        </a>
      </div>
      <div>
        <a
          href="https://github.com/vatariguana"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-github" />
          Veronica Atariguana
        </a>
      </div>
    </div>
  );
};

export default Header;
