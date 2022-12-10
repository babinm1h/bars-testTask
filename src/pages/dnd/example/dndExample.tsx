import update from "immutability-helper";
import type { FC } from "react";
import { memo, useState } from "react";
import { useDrop } from "react-dnd";
import { ITodo, TodoDragTypes } from "../../../types/todo.types";
import { Card } from "./card";
import st from "../dnd.module.scss";

const ITEMS = [
  {
    id: 1,
    text: "Write a cool JS library",
  },
  {
    id: 2,
    text: "Make it generic enough",
  },
  {
    id: 3,
    text: "Write README",
  },
  {
    id: 4,
    text: "Create some examples",
  },
  {
    id: 5,
    text: "Spam in Twitter and IRC to promote it",
  },
  {
    id: 6,
    text: "Faxxxxxxx",
  },
  {
    id: 7,
    text: "PROFIT",
  },
];

const DndExample: FC = memo(function DndExample() {
  const [completed, setCompleted] = useState<ITodo[]>([]);
  const [cards, setCards] = useState<ITodo[]>(ITEMS);

  const findCard = (id: number) => {
    const card = cards.filter((c) => c.id === id)[0];
    return {
      card,
      index: cards.indexOf(card),
    };
  };

  const moveCard = (id: number, atIndex: number) => {
    const { card, index } = findCard(id);
    setCards(
      update(cards, {
        $splice: [
          [index, 1],
          [atIndex, 0, card],
        ],
      })
    );
  };

  const findCompleted = (id: number) => {
    const card = completed.filter((c) => c.id === id)[0];
    return {
      card,
      index: completed.indexOf(card),
    };
  };

  const moveCompleted = (id: number, atIndex: number) => {
    const { card, index } = findCompleted(id);
    setCompleted(
      update(completed, {
        $splice: [
          [index, 1],
          [atIndex, 0, card],
        ],
      })
    );
  };

  const onDropInProg = (id: number) => {
    setCards((prev) => [...prev, findCompleted(id).card]);
    setCompleted((prev) => prev.filter((i) => i.id !== id));
  };

  const onDropInCompl = (id: number) => {
    setCompleted((prev) => [...prev, findCard(id).card]);
    setCards((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className={st.wrapper}>
      <InProgressBox cards={cards} findCard={findCard} moveCard={moveCard} onDrop={onDropInProg} />
      <CompletedBox cards={completed} findCard={findCompleted} moveCard={moveCompleted} onDrop={onDropInCompl} />
    </div>
  );
});
export default DndExample;

interface IProps1 {
  cards: ITodo[];
  onDrop: (id: number) => void;
  moveCard: (id: number, atIndex: number) => void;
  findCard: (id: number) => {
    card: ITodo;
    index: number;
  };
}

const InProgressBox: FC<IProps1> = ({ cards, findCard, moveCard, onDrop }) => {
  const [, drop] = useDrop({
    accept: [TodoDragTypes.inProgress, TodoDragTypes.checked],
    drop: (item: ITodo & { type: TodoDragTypes }, mon) => {
      if (item.type === TodoDragTypes.checked) {
        onDrop(item.id);
      }
    },
  });

  return (
    <div ref={drop} className={st.box2}>
      <h1>In progress</h1>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
          findCard={findCard}
          type={TodoDragTypes.inProgress}
        />
      ))}
    </div>
  );
};

const CompletedBox: FC<IProps1> = ({ cards, findCard, moveCard, onDrop }) => {
  const [, drop] = useDrop({
    accept: [TodoDragTypes.inProgress, TodoDragTypes.checked],
    drop: (item: ITodo & { type: TodoDragTypes }, mon) => {
      if (item.type === TodoDragTypes.inProgress) {
        onDrop(item.id);
      }
    },
  });

  return (
    <div ref={drop} className={st.box1}>
      <h1>Completed</h1>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
          findCard={findCard}
          type={TodoDragTypes.checked}
        />
      ))}
    </div>
  );
};
