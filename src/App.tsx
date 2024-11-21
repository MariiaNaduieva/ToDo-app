import React, { useState } from "react";
import { TaskList } from "./components/TaskList";
import { Stack, Typography } from "@mui/material";

export type StatusType = "ToDo" | "In Progress" | "Done";
export type Task = {
  id: number;
  name: string;
  description: string;
  status: StatusType;
};

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (name: string, description: string) => {
    const id = Date.now();
    const newTask: Task = {
      id,
      name,
      description,
      status: "ToDo",
    };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (id: number, status: StatusType) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <Stack spacing={4} margin={4}>
      <Typography variant="h3">ToDo</Typography>
      <TaskList
        tasks={tasks}
        onUpdateTaskStatus={updateTaskStatus}
        onDeleteTask={deleteTask}
        setTasks={setTasks}
        addTask={addTask}
      />
    </Stack>
  );
};
