import "../style.css";
import { useState } from "preact/hooks";
import { signal } from "@preact/signals";

const count = signal(0);

const ComponentA = ({ count, onClick }) => {
  return (
    <div className="beige-box">
      <ComponentB />
      <ComponentC count={count} onClick={onClick} />
    </div>
  );
};

const ComponentB = () => {
  return <div className="blue-box">Signals Demo</div>;
};

const ComponentC = ({ count, onClick }) => {
  return (
    <div className="yellow-box">
      <button onClick={onClick}>click {count.value}</button>
    </div>
  );
};

const SignalsDemo = () => {
  const onClick = () => {
    count.value = count.value + 1;
  };
  return <ComponentA count={count} onClick={onClick} />;
};

export default SignalsDemo;
