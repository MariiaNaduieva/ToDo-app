import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

type AddNewTaskModalProps = {
  open: boolean;
  onClose: () => void;
  addTask: (name: string, description: string) => void;
};

export const AddNewTaskModal = ({
  open,
  onClose,
  addTask,
}: AddNewTaskModalProps) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = () => {
    addTask(taskName, taskDescription);
    setTaskName("");
    setTaskDescription("");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          padding: 3,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Add new task
        </Typography>
        <TextField
          label="Task name"
          fullWidth
          variant="outlined"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Task description"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          value={taskDescription}
          onChange={(event) => setTaskDescription(event.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button
            variant="outlined"
            onClick={() => {
              setTaskName("");
              setTaskDescription("");
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTask}
            disabled={!taskName}
          >
            Add
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
