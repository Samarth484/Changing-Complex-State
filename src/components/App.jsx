import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: ""
  });
  function handleChange(event) {
   
    const{name,value}=event.target;

    setFullName(prevValues => {
      if (name === "fName")
        return { fname: value, lname: prevValues.lname };
      else if (name === "lName")
        return { fname: prevValues.fname, lname: value };
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
          value={fullName.fname}
          autocomplete="off"
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lname}
          autocomplete="off"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
