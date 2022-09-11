import "../style.css";
import { signal, computed, effect, batch } from "@preact/signals";

const name = signal("John");
const surname = signal("Doe");

const count = signal(0);
const todos = signal([
  { text: "Buy milk", completed: true },
  { text: "Check if subscribed", completed: false },
]);
const remainingCount = computed(() => {
  return todos.value.filter((todo) => !todo.completed).length;
});

effect(() => {
  console.log(`count updated to ${count.value}`);
});

effect(() => {
  console.log(name.value, surname.value);
});

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
      <button onClick={onClick}>click {count}</button>
      <div>remaining tasks: {remainingCount}</div>
    </div>
  );
};

const SignalsDemo = () => {
  const onClick = () => {
    count.value = count.value + 1;
    batch(() => {
      name.value = "Jane";
      surname.value = "Smith";
    });
  };
  return <ComponentA count={count} onClick={onClick} />;
};

export default SignalsDemo;
