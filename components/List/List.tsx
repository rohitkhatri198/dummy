import React from "react";
import s from "./List.module.scss";
import TaskCard from "./TaskCard";
const List = () => {
  return (
    <div className={s.container}>
      <TaskCard name="Python" isVisible={true} />
      <TaskCard name="React" isVisible={false} />
      <TaskCard name="Angular" isVisible={false} />
      <TaskCard name="Ruby" isVisible={true} />
      {/* <TaskCard name="Angular" /> */}
    </div>
  );
};

export default List;
