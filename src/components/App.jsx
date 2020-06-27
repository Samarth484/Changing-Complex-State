import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setContact(preValues => {
      if (name === "fName")
        return { fName: value, lName: preValues.lName, email: preValues.email };
      else if (name === "lName")
        return { fName: preValues.fName, lName: value, email: preValues.email };
      else if (name === "email")
        return { fName: preValues.fName, lName: preValues.lName, email: value };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          autocomplete="off"
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          autocomplete="off"
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
          autocomplete="off"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
