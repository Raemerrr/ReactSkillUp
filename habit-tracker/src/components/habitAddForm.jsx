import React, {useRef} from "react";

const HabitAddForm = (props) => {
  const inputRef = useRef();
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    //inputRef.current.value = "";
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">ADD</button>
    </form>
  );
};

export default HabitAddForm;
