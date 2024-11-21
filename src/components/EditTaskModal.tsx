import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

type EditTaskModalProps = {
  open: boolean;
  onClose: () => void;
  task: { id: number; name: string; description: string };
  onSave: (id: number, name: string, description: string) => void;
};

export const EditTaskModal = ({
  open,
  onClose,
  task,
  onSave,
}: EditTaskModalProps) => {
  const [taskName, setTaskName] = useState(task.name);
  const [taskDescription, setTaskDescription] = useState(task.description);

  useEffect(() => {
    setTaskName(task.name);
    setTaskDescription(task.description);
  }, [task]);

  const handleSave = () => {
    onSave(task.id, taskName, taskDescription);
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
          Edit task
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
              setTaskName(task.name);
              setTaskDescription(task.description);
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            disabled={!taskName}
          >
            Save
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
