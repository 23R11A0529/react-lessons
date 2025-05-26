import React, { useRef, useState } from "react";

export default function App15() {
  const num1Ref = useRef();
  const num2Ref = useRef();
  const colorRef = useRef();
  const resultRef = useRef();
  const [sum, setSum] = useState(0);

  const handleAdd = () => {
    const n1 = Number(num1Ref.current.value);
    const n2 = Number(num2Ref.current.value);
    setSum(n1 + n2);
  };

  const handleColor = () => {
    const color = colorRef.current.value;
    resultRef.current.style.color = color;
  };

  return (
    <div>
      <h1>App15</h1>
      <h2>useRef hook - to create uncontrolled component</h2>
      <p>
        <input type="text" ref={num1Ref} />{" "}
        <input type="text" ref={num2Ref} />{" "}
        <button onClick={handleAdd}>Submit</button>
      </p>
      <p>{sum}</p>
      <hr />
      <p>
        <input type="text" ref={colorRef} />{" "}
        <button onClick={handleColor}>Submit</button>
      </p>
      <h3 ref={resultRef}>Hello world</h3>
    </div>
  );
}