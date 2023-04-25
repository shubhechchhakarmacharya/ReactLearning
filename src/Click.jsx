import { useState } from "react";

const Click = () => {
  let yellow = '#ffc800';
  let red = 'red';
  let pink = 'pink';
  let blue = 'blue';
  let green = 'green';
  let purple = '#A020F0';
  let colors = [red, pink, blue, green, purple];
  const [bgColor, setBgColor] = useState(yellow);
  const changeColor = (e) => {
    e.preventDefault();
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  }
  return (
    <div className="App">
      <div className="App-header" style={{background: bgColor}}>
        <button onClick={changeColor}>Change Color</button>
      </div>
    </div>
  );
}

export default Click;
