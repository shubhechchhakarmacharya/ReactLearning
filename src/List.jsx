import React, { useState } from "react";
// const [list , setList] = useState([])
class Form extends React.Component {
  state = {
    name: "",
    post: ""
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.post === "") {
      alert("Don't leave them blank");
      return;
    }
    console.log(this.state);
  };

  render() {
    return (
      <div className="box-decoration-slice bg-gradient-to-r mt-5 from-indigo-600 to-pink-500 text-white rounded">
        <form className="px-2" onSubmit={this.add}>
          <label>Name</label> <br />
          <input
            className="text-lime-500 focus:outline-none focus:ring focus:ring-lime-300 rounded max-w- px-1"
            placeholder="Enter your name" 
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          <br />
          <label>Post</label> <br />
          <input
            className="text-lime-500 focus:outline-none focus:ring focus:ring-lime-300 rounded max-w- px-1"
            placeholder="Enter your post"
            value={this.state.post}
            onChange={(e) => {
              this.setState({ post: e.target.value });
            }}
          />
          <br />
          <button className="rounded-md border-dashed border-2 border-indigo-200 border-y-indigo-500 mt-4 pt-1 pb-1 px-4">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
