import React from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

const Habits = ({
  habitList,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}) => {
  return (
    <>
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habitList.map((habit) => {
          return (
            <Habit
              key={habit.id}
              data={habit}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
      <button className="habits-reset" onClick={onReset}>
        Reset All
      </button>
    </>
  );
};

export default Habits;
