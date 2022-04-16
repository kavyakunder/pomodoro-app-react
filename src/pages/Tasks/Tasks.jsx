import { useState } from "react";
import InputCard from "../../components/InputCard/InputCard";
import Modal from "../../components/Modal/Modal";

export default function Tasks() {
  const [taskList, settaskList] = useState([]);
  const saveToList = (task) => {
    settaskList([...taskList, task]);
  };
  const deleteTodo = (taskId) => {
    const list = taskList.filter((taskItem) => taskItem.id !== taskId);
    settaskList(list);
  };

  return (
    <div>
      <InputCard saveToList={saveToList} />
      <div>
        <>
          {taskList.map((taskItem, index) => (
            <Modal
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
