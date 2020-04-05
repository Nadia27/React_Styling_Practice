//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

const time = new Date();
const timeOfDay = time.toLocaleString("en-US", {
  hour: "numeric",
  hour12: true
});
let message;
console.log(timeOfDay);

if (timeOfDay >= "12 AM" && timeOfDay <= "12 PM") {
  message = "Good Morning";
} else if (timeOfDay >= "12 PM" && timeOfDay <= "6 PM") {
  message = "Good Afternoon";
} else {
  message = "Good Night";
}

ReactDOM.render(
  <div>
    <h1 className="heading">{message}</h1>
  </div>,
  document.getElementById("root")
);
