import React, { useState, useCallback } from "react";
import Navbar from "./components/navbar";
import Habits from "./components/habits";

const App = () => {
  const [habitList, setHabitList] = useState([
    { id: 0, habitName: "Reading", habitCount: 0 },
    { id: 1, habitName: "Codding", habitCount: 0 },
    { id: 2, habitName: "Running", habitCount: 0 },
  ]);

  const handleAdd = useCallback((name) => {
    setHabitList((habitList) => [
      ...habitList,
      { id: Date.now(), habitName: name, habitCount: 0 },
    ]);
  }, []);

  const habitsResetHandle = useCallback(() => {
    setHabitList((habitList) =>
      habitList.map((item) => {
        if (item.habitCount !== 0) {
          return { ...item, habitCount: 0 };
        }
        return item;
      })
    );
  }, []);

  const handleIncrement = useCallback((habit) => {
    setHabitList((habitList) =>
      habitList.map((item) => {
        if (item.id === habit.id) {
          return { ...habit, habitCount: habit.habitCount + 1 };
        }
        return item;
      })
    );
  }, []);

  const handleDecrement = useCallback((habit) => {
    setHabitList((habitList) =>
      habitList.map((item) => {
        if (item.id === habit.id) {
          return {
            ...item,
            habitCount: item.habitCount > 0 ? item.habitCount - 1 : 0,
          };
        }
        return item;
      })
    );
  }, []);

  const handleDelete = useCallback((habit) => {
    setHabitList((habitList) => habitList.filter((item) => item !== habit));
  }, []);

  return (
    <section className="app">
      <Navbar
        count={habitList.filter((item) => item.habitCount > 0).length}
      ></Navbar>
      <Habits
        habitList={habitList}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={habitsResetHandle}
      />
    </section>
  );
};

export default App;
