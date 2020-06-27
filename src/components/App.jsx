import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: ""
  });
  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullName(prevValues => {
      if (inputName === "fName")
        return { fname: newValue, lname: prevValues.lname };
      else if (inputName === "lName")
        return { fname: prevValues.fname, lname: newValue };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          // value={fullName.fname}
          autocomplete="off"
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          // value={fullName.lname}
          autocomplete="off"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
