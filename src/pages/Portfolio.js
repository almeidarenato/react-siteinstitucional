import React from "react";
import { Slider } from "infinite-react-carousel";

const Portfolio = () => {
  const settings = {
    autoplay: true,
    centerMode: true,
    shift: 20,
    wheelScroll: 2,
    dots: true
  };
  return (
    <div id="portfolio" className="container-fluid text-center bg-grey">
      <h2>Portfolio</h2>
      <br />
      <h4>What we have created</h4>
      <div className="row text-center">
        <div className="col-sm-4">
          <div className="thumbnail">
            <img src="/img/paris.jpg" alt="Paris" width="400" height="300" />
            <p>
              <strong>Paris</strong>
            </p>
            <p>Yes, we built Paris</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <img
              src="/img/newyork.jpg"
              alt="New York"
              width="400"
              height="300"
            />
            <p>
              <strong>New York</strong>
            </p>
            <p>We built New York</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <img
              src="/img/sanfran.jpg"
              alt="San Francisco"
              width="400"
              height="300"
            />
            <p>
              <strong>San Francisco</strong>
            </p>
            <p>Yes, San Fran is ours</p>
          </div>
        </div>
      </div>
      <br />

      <h2>Oque falam a nosso respeito</h2>
      <div
        id="myCarousel"
        className="carousel slide text-center"
        data-ride="carousel"
      >
        {/* // <!-- Wrapper for slides --> */}
        <div className="carousel-inner" role="listbox">
          <Slider {...settings}>
            <div className="item">
              <h4>
                "This company is the best. I am so happy with the result!"
                <br />
                <span>Michael Roe, Vice President, Comment Box</span>
              </h4>
            </div>
            <div className="item">
              <h4>
                "One word... WOW!!"
                <br />
                <span>John Doe, Salesman, Rep Inc</span>
              </h4>
            </div>
            <div className="item">
              <h4>
                "Could I... BE any more happy with this company?"
                <br />
                <span>Chandler Bing, Actor, FriendsAlot</span>
              </h4>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
