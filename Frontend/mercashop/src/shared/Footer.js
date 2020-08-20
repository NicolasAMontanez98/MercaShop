import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer pt-3 mt-4">
        <div className="container">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>
            Album example is © Bootstrap, but please download and customize it
            for yourself!
          </p>
          <p>
            New to Bootstrap?{" "}.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
