import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
import { Link } from "react-router-dom";

configureAnchors({ offset: -60, scrollDuration: 500 });
// import { Container } from './styles';
const AppHeader = () => {
  return (
    <div>
      <ScrollableAnchor id={"TOP"}>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">
                Logo
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">SOBRE</Link>
                </li>
                <li>
                  <Link to="/services">SERVIÇOS</Link>
                </li>
                <li>
                  <Link to="/portfolio">PORTFOLIO</Link>
                </li>
                <li>
                  <Link to="/pricing">INVESTIMENTO</Link>
                </li>
                <li>
                  <Link to="/contact">CONTATO</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </ScrollableAnchor>
      <div className="jumbotron text-center">
        <h1>Site Institucional</h1>
        <p>Exemplo de Site Institucional</p>
        <form>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              size="50"
              placeholder="Email Address"
              required
            />
            <div className="input-group-btn">
              <button type="button" className="btn btn-danger">
                Inscreva-se
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppHeader;
