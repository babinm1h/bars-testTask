import React, { useState } from "react";
import { ITodo, TodoDragTypes } from "../../types/todo.types";
import st from "./dnd.module.scss";
import DropBox from "./dropBox";
import DndExample from "./example/dndExample";

const arr1: ITodo[] = [
  { id: 1, text: "Hello" },
  { id: 2, text: "World" },
  { id: 3, text: "React" },
];
const arr2: ITodo[] = [
  { id: 4, text: "Hello1" },
  { id: 5, text: "World2" },
  { id: 6, text: "React3" },
];

const Dnd = () => {
  const [items1, setItems1] = useState(arr1);
  const [items2, setItems2] = useState(arr2);

  const onDrop1 = (item: ITodo) => {
    setItems1((prev) => [...prev, item]);
    setItems2((prev) => prev.filter((i) => i.id !== item.id));
  };

  const onDrop2 = (item: ITodo) => {
    setItems2((prev) => [...prev, item]);
    setItems1((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <div className={st.wrapper}>
      <DropBox items={items1} onDrop={onDrop1} accept={TodoDragTypes.checked} dragType={TodoDragTypes.inProgress} />
      <DropBox items={items2} onDrop={onDrop2} accept={TodoDragTypes.inProgress} dragType={TodoDragTypes.checked} />

      <DndExample />
    </div>
  );
};

export default Dnd;
