import React, { useState } from "react";
import { StatusType, Task } from "../App";
import { TaskItem } from "./TaskItem";
import { Box, Typography, Stack, Button } from "@mui/material";
import { AddNewTaskModal } from "./AddNewTaskModal";
import { EditTaskModal } from "./EditTaskModal";

type TaskListProps = {
  tasks: Task[];
  onUpdateTaskStatus: (id: number, status: StatusType) => void;
  onDeleteTask: (id: number) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  addTask: (name: string, description: string) => void;
};

export const TaskList = ({
  tasks,
  onUpdateTaskStatus,
  onDeleteTask,
  setTasks,
  addTask,
}: TaskListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task>();

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const handleSaveTask = (id: number, name: string, description: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, name, description } : task
    );
    setTasks(updatedTasks);
    setIsModalOpen(false);
  };

  return (
    <Box padding={2}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsModalOpen(true)}
        sx={{ marginBottom: 3 }}
      >
        Add task
      </Button>

      <AddNewTaskModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addTask={addTask}
      />
      {selectedTask && (
        <EditTaskModal
          open={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          task={selectedTask}
          onSave={handleSaveTask}
        />
      )}
      <Stack direction="row" spacing={2}>
        <Stack
          spacing={2}
          sx={{
            flex: 1,
            backgroundColor: "#edf0f5",
            padding: 2,
            borderRadius: 4,
          }}
        >
          <Typography variant="h5" align="center">
            ToDo
          </Typography>
          {tasks
            .filter((task) => task.status === "ToDo")
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onUpdateTaskStatus={onUpdateTaskStatus}
                onDeleteTask={onDeleteTask}
                onEditTask={handleEditTask}
              />
            ))}
        </Stack>

        <Stack
          spacing={2}
          sx={{
            flex: 1,
            backgroundColor: "#edf0f5",
            padding: 2,
            borderRadius: 4,
          }}
        >
          <Typography variant="h5" align="center">
            In Progress
          </Typography>
          {tasks
            .filter((task) => task.status === "In Progress")
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onUpdateTaskStatus={onUpdateTaskStatus}
                onDeleteTask={onDeleteTask}
                onEditTask={handleEditTask}
              />
            ))}
        </Stack>

        <Stack
          spacing={2}
          sx={{
            flex: 1,
            backgroundColor: "#edf0f5",
            padding: 2,
            borderRadius: 4,
          }}
        >
          <Typography variant="h5" align="center">
            Done
          </Typography>
          {tasks
            .filter((task) => task.status === "Done")
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onUpdateTaskStatus={onUpdateTaskStatus}
                onDeleteTask={onDeleteTask}
                onEditTask={handleEditTask}
              />
            ))}
        </Stack>
      </Stack>
    </Box>
  );
};
