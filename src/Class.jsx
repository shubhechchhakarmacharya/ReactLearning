import {React, Component} from "react";
import ReactDOM from "react-dom";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Tesla",
      color: "Hot Red"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.brand}</h1>
        <h1>{this.state.color}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Car/>, document.getElementById("root"));
