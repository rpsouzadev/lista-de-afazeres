import { RemoveTaskPayload, TaskData } from './type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface TasksState extends Array<TaskData> {}

export function loadTasks(): TasksState {
  const storedTasks = localStorage.getItem('tasks')
  return storedTasks ? JSON.parse(storedTasks) : []
}

function saveTasksToLocalStorage(tasks: TasksState) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

const initialState: TasksState = loadTasks()

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskData>) => {
      const newTask = {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
      }

      state.push(newTask)
      saveTasksToLocalStorage(state)
    },
    updateTask: (state, action: PayloadAction<TaskData>) => {
      const { id, title, description } = action.payload
      const taskIndex = state.findIndex((task) => task.id === id)

      if (taskIndex !== -1) {
        const updatedTask = { ...state[taskIndex], title, description }
        state[taskIndex] = updatedTask
        saveTasksToLocalStorage(state)
      }
    },
    removeTask: (state, action: PayloadAction<RemoveTaskPayload>) => {
      const taskIdToRemove = action.payload.id
      const newState = state.filter((task) => task.id !== taskIdToRemove)
      saveTasksToLocalStorage(newState)
      return newState
    },
  },
})

export const { addTask, updateTask, removeTask } = taskSlice.actions
