import React, { FC, PropsWithChildren } from "react";
import { useDrag } from "react-dnd";
import { ITodo, TodoDragTypes } from "../../types/todo.types";
import st from "./dnd.module.scss";

const DndItem: FC<PropsWithChildren<{ item: ITodo; dragType: TodoDragTypes }>> = ({ item, dragType }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: item,
    type: dragType,
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() };
    },
  });
  

  return (
    <div className={st.item} ref={drag}>
      {item.text}
    </div>
  );
};

export default DndItem;
