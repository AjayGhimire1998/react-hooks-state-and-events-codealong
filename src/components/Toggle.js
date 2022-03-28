import React, { useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function HandleToggle(){
    setIsOn((isOn) => !isOn)

  }
  return <button style= {{backgroundColor: isOn? "green": "red"}}onClick={HandleToggle}>{isOn ? "ON": "OFF"}</button>;
}

export default Toggle;
