import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        {/* // <!-- Container (About Section) --> */}
        <div id="about" className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <h2>Sobre o Site Institucional</h2>
              <br />
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h4>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <br />
              <button className="btn btn-default btn-lg">
                Entre em Contato
              </button>
            </div>
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-signal logo"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-grey">
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-globe logo "></span>
          </div>
          <div className="col-sm-8">
            <h2>Nossos Valores</h2>
            <br />
            <h4>
              <strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </h4>
            <br />
            <p>
              <strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
