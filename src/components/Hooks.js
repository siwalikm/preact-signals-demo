import "../style.css";
import { useState } from "preact/hooks";

const ComponentA = ({ count, onClick }) => {
  return (
    <div className="beige-box">
      <ComponentB />
      <ComponentC count={count} onClick={onClick} />
    </div>
  );
};

const ComponentB = () => {
  return <div className="blue-box">Hooks Demo</div>;
};

const ComponentC = ({ count, onClick }) => {
  return (
    <div className="yellow-box">
      <button onClick={onClick}>click {count}</button>
    </div>
  );
};

const HooksDemo = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };
  return <ComponentA count={count} onClick={onClick} />;
};

export default HooksDemo;
