import React, { FC } from "react";
import { useDrop } from "react-dnd";
import { ITodo, TodoDragTypes } from "../../types/todo.types";
import st from "./dnd.module.scss";
import DndItem from "./dndItem";

interface IProps {
  items: ITodo[];
  onDrop: (item: ITodo) => void;
  accept: TodoDragTypes;
  dragType: TodoDragTypes;
}
const DropBox: FC<IProps> = ({ items, accept, onDrop, dragType }) => {
  const [{ isOver }, drop] = useDrop<ITodo, any, any>({
    accept: accept,
    collect: (monitor) => {
      return { isOver: !!monitor.isOver() };
    },
    drop: (item, mon) => {
      onDrop(item);
    },
  });
  return (
    <div className={st.box1} ref={drop}>
      {items.map((i, idx) => (
        <DndItem key={idx} item={i} dragType={dragType} />
      ))}
    </div>
  );
};

export default DropBox;
