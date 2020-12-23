import React, { useState } from "react";

const Content = () => {
  const addInputHandle = (e) => {
    e.target.value = "";
  };

  const habitIncreaseHandle = (e) => {
    const targetParentEl = e.target.parentElement.getElementsByClassName(
      "habit-count"
    )[0];
    if (Number(targetParentEl.textContent) === 0) {
      const el = document.getElementsByClassName("navbar-count")[0];
      el.textContent = String(Number(el.textContent) + 1);
    }
    targetParentEl.textContent = String(Number(targetParentEl.textContent) + 1);
  };

  const habitDecreaseHandle = (e) => {
    const targetParentEl = e.target.parentElement.getElementsByClassName(
      "habit-count"
    )[0];
    if (Number(targetParentEl.textContent) === 1) {
      const el = document.getElementsByClassName("navbar-count")[0];
      el.textContent = String(Number(el.textContent) - 1);
    }

    if (Number(targetParentEl.textContent) > 0) {
      targetParentEl.textContent = String(
        Number(targetParentEl.textContent) - 1
      );
    }
  };

  const habitDeleteHandle = (e) => {
    const targetParentEl = e.target.parentElement.getElementsByClassName(
      "habit-count"
    )[0];
    if (Number(targetParentEl.textContent) > 0) {
      const el = document.getElementsByClassName("navbar-count")[0];
      el.textContent = String(Number(el.textContent) - 1);
    }
    e.target.parentElement.parentNode.removeChild(e.target.parentElement);
  };

  const addButtonHandle = (e) => {
    e.preventDefault();
    const el = document.getElementsByClassName("add-input")[0];
    if (el.value) {
      const tempList = [...listItems];
      const tempKey =
        tempList.length > 0 ? tempList[tempList.length - 1].key + 1 : 0;
      tempList.push(
        <li key={tempKey} className="habit">
          <span className="habit-name">{el.value}</span>
          <span className="habit-count">{0}</span>
          <button
            className="habit-button habit-increase"
            onClick={habitIncreaseHandle}
          >
            ➕
          </button>
          <button
            className="habit-button habit-decrease"
            onClick={habitDecreaseHandle}
          >
            ➖
          </button>
          <button
            className="habit-button habit-delete"
            onClick={habitDeleteHandle}
          >
            ✖
          </button>
        </li>
      );
      setListitems(tempList);
    }
  };

  const habitsResetHandle = () => {
    const el = document.getElementsByClassName("habit-count");
    for (let item of el) {
      item.textContent = 0;
    }
    document.getElementsByClassName("navbar-count")[0].textContent = "0";
  };

  const [listItems, setListitems] = useState([
    <li key={0} className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">0</span>
      <button
        className="habit-button habit-increase"
        onClick={habitIncreaseHandle}
      >
        ➕
      </button>
      <button
        className="habit-button habit-decrease"
        onClick={habitDecreaseHandle}
      >
        ➖
      </button>
      <button className="habit-button habit-delete" onClick={habitDeleteHandle}>
        ✖
      </button>
    </li>,
    <li key={1} className="habit">
      <span className="habit-name">Running</span>
      <span className="habit-count">0</span>
      <button
        className="habit-button habit-increase"
        onClick={habitIncreaseHandle}
      >
        ➕
      </button>
      <button
        className="habit-button habit-decrease"
        onClick={habitDecreaseHandle}
      >
        ➖
      </button>
      <button className="habit-button habit-delete" onClick={habitDeleteHandle}>
        ✖
      </button>
    </li>,
    <li key={2} className="habit">
      <span className="habit-name">Coding</span>
      <span className="habit-count">0</span>
      <button
        className="habit-button habit-increase"
        onClick={habitIncreaseHandle}
      >
        ➕
      </button>
      <button
        className="habit-button habit-decrease"
        onClick={habitDecreaseHandle}
      >
        ➖
      </button>
      <button className="habit-button habit-delete" onClick={habitDeleteHandle}>
        ✖
      </button>
    </li>,
  ]);

  return (
    <div className="habits">
      <input
        type="text"
        className="add-input"
        placeholder="Habit"
        onClick={addInputHandle}
      />
      <button className="add-button" onClick={addButtonHandle}>
        ADD
      </button>
      <ul>{listItems}</ul>
      <button className="habits-reset" onClick={habitsResetHandle}>
        Reset All
      </button>
    </div>
  );
};

export default Content;
