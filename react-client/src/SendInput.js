import React, { useState } from "react";

const SendInput = () => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = async () => {
    console.log(inputValue);
    const data = await fetch("http://localhost:4000/db", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: inputValue }),
    }).then(() => setInputValue(""));
    console.log(data);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => inputHandler(e)}
      ></input>
      <button onClick={() => sendMessage()}>add</button>
    </div>
  );
};

export default SendInput;
