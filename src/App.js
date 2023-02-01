import React, { useState } from "react";
import Title from "./components/Title";

function App() {
  const [name, setName] = useState("sign");
  const [date, setDate] = useState("Date");
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const inputstile = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
  };
  document.body.style.background = "#eee";
  return (
    <div className="container text-center">
      <Title classes={"title"} text={name} />
      <Title classes={"main-title mb-4"} text={date} />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis mollitia
        exercitationem explicabo deserunt ipsa quod ad non, itaque similique
        reprehenderit unde fuga eligendi, consequatur animi pariatur error quas
        doloremque! Officiis?
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input
          type="date"
          value={date}
          style={inputstile}
          onChange={handleDateChange}
        />
        <input
          type="text"
          value={name}
          style={inputstile}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}
export default App;
