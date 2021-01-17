import React from "react";
import "../style/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <ul className="waycool_header">
          <li className="cool_list">
            <a className="active" href="#waycool">
              WayCool
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
