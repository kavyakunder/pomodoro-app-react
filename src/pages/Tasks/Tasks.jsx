import { useState } from "react";
import InputCard from "../../components/InputCard/InputCard";
import TaskCard from "../../components/TaskCard/TaskCard";

export default function Tasks() {
  const [taskList, setTaskList] = useState([]);
  const saveToList = (task) => {
    setTaskList([...taskList, task]);
  };
  const deleteTodo = (taskId) => {
    setTaskList((prev) => prev.filter((taskItem) => taskItem.id !== taskId));
  };

  return (
    <div>
      <InputCard saveToList={saveToList} />
      <div>
        <>
          {taskList.map((taskItem, index) => (
            <TaskCard
              key={taskItem.id}
              {...taskItem}
              deleteTodo={deleteTodo}
              index={index}
            />
          ))}
        </>
      </div>
    </div>
  );
}
