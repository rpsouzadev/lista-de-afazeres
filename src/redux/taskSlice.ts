import { RemoveTaskPayload, TaskData } from './type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface TasksState extends Array<TaskData> {}

const initialState: TasksState = []

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
    },
    updateTask: (state, action: PayloadAction<TaskData>) => {
      const { id, title, description } = action.payload
      const taskIndex = state.findIndex((task) => task.id === id)

      if (taskIndex !== -1) {
        state[taskIndex] = { id, title, description }
      }
    },
    removeTask: (state, action: PayloadAction<RemoveTaskPayload>) => {
      const taskIdToRemove = action.payload.id

      state = state.filter((task) => task.id !== taskIdToRemove)
    },
  },
})

export const { addTask, updateTask, removeTask } = taskSlice.actions
