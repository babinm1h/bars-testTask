import type { FC } from "react";
import { memo } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ITodo, TodoDragTypes } from "../../../types/todo.types";
import st from "../dnd.module.scss";

export interface CardProps {
  id: number;
  text: string;
  moveCard: (id: number, to: number) => void;
  findCard: (id: number) => { index: number };
  type: TodoDragTypes;
}

export const Card: FC<CardProps> = memo(function Card({ id, text, moveCard, findCard, type }) {
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: type,
      item: { id, originalIndex, type },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveCard]
  );

  const [, drop] = useDrop(
    () => ({
      accept: [TodoDragTypes.checked, TodoDragTypes.inProgress],
      hover({ id: draggedId, type: itemType }: ITodo & { type: TodoDragTypes }) {
        if (itemType !== type) return;
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );

  return (
    <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0 : 1 }} className={st.item}>
      {text}
    </div>
  );
});
