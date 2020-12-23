import React, { memo } from "react";

const Habit = memo(({ data, onIncrement, onDecrement, onDelete }) => {
  const handleIncrement = () => {
    onIncrement(data);
  };

  const handleDecrement = () => {
    onDecrement(data);
  };
  const handleDelete = () => {
    onDelete(data);
  };

  return (
    <li>
      <span className="habit-name">{data.habitName}</span>
      <span className="habit-count">{data.habitCount}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        ➕
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        ➖
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        ✖
      </button>
    </li>
  );
});

export default Habit;
