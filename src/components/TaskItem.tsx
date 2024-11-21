import React from "react";
import { StatusType, Task } from "../App";
import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

type TaskItemProps = {
  task: Task;
  onUpdateTaskStatus: (
    id: number,
    status: "ToDo" | "In Progress" | "Done"
  ) => void;
  onDeleteTask: (id: number) => void;
  onEditTask: (task: Task) => void;
};

export const TaskItem = ({
  task,
  onUpdateTaskStatus,
  onDeleteTask,
  onEditTask,
}: TaskItemProps) => {
  const getNextStatus = (status: StatusType) => {
    if (status === "ToDo") return "In Progress";
    if (status === "In Progress") return "Done";
    return "ToDo";
  };

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        padding: 2,
        borderRadius: 1,
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
        }}
        onClick={() => onEditTask(task)}
      >
        <EditIcon />
      </IconButton>
      <Typography variant="h6">{task.name}</Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ marginBottom: 2 }}
      >
        {task.description}
      </Typography>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          onClick={() =>
            onUpdateTaskStatus(task.id, getNextStatus(task.status))
          }
        >
          {task.status === "ToDo"
            ? "Start"
            : task.status === "In Progress"
            ? "Complete"
            : "Resume"}
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </Button>
      </Stack>
    </Box>
  );
};
