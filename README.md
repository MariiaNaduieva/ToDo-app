# ToDo Application

This is a simple **ToDo Application** built using React and TypeScript. It allows users to manage tasks by creating, updating, and deleting them. Tasks are categorized into three statuses: **New**, **In Progress**, and **Done**.

## Features

- **Add Tasks**: Create new tasks with a title and description.
- **Update Task Status**: Transition tasks between statuses (`New` → `In Progress` → `Done` → `New`).
- **Edit Tasks**: Modify task details (title and description) using an edit modal.
- **Delete Tasks**: Remove tasks from the list.
- **Organized View**: Tasks are grouped and displayed by their status.

## Components Overview

### 1. **App**

- The root component managing global task state.
- Renders the `TaskList` component.

### 2. **TaskList**

- Displays tasks grouped by their statuses.
- Handles task addition and provides functions for task editing, status updates, and deletion.

### 3. **TaskItem**

- Represents a single task card.
- Includes controls for updating the task's status, editing, and deleting it.

### 4. **AddNewTaskModal**

- A modal for creating new tasks.
- Contains fields for entering task name and description.

### 5. **EditTaskModal**

- A modal for editing an existing task.
- Allows modification of task name and description.
