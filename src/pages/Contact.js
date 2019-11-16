import React from "react";

const Contact = () => {
  return (
    <div>
      {/* // <!-- Container (Contact Section) --> */}
      <div id="contact" className="container-fluid bg-grey">
        <h2 className="text-center">CONTATO</h2>
        <div className="row">
          <div className="col-sm-5">
            <p>Entre em contato conosco e retornaremos em até 24 horas.</p>
            <p>
              <span className="glyphicon glyphicon-map-marker"></span> São
              Paulo, SP
            </p>
            <p>
              <span className="glyphicon glyphicon-phone"></span> +00 1515151515
            </p>
            <p>
              <span className="glyphicon glyphicon-envelope"></span>{" "}
              renatoam@ymail.com
            </p>
          </div>
          <div className="col-sm-7 ">
            <div className="row">
              <div className="col-sm-6 form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
            </div>
            <textarea
              className="form-control"
              id="comments"
              name="comments"
              placeholder="Comment"
              rows="5"
            ></textarea>
            <br />
            <div className="row">
              <div className="col-sm-12 form-group">
                <button className="btn btn-default pull-right" type="submit">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // <!-- Image of location/map --> */}
      <img
        src={process.env.PUBLIC_URL + "/img/map.jpg"}
        className="w3-image w3-greyscale-min"
        style={{ width: "100%" }}
        alt="mapa"
      />
    </div>
  );
};
export default Contact;
