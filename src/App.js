import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [htext, setHtext] = useState("");

  function handleClick(event) {
    setHtext(name);
    event.preventDefault();
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {htext}</h1>
      <form className="bttn" onSubmit={handleClick}>
        <input onChange={handleChange} type="text" placeholder="name" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
