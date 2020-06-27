import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  function setFirstName(event) {
    setFname(event.target.value);
  }
  function setLastName(event) {
    setLname(event.target.value);
  }
  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}
      </h1>
      <form>
        <input onChange={setFirstName} name="fName" placeholder="First Name" />
        <input onChange={setLastName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
