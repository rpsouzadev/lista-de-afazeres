import { Route, Routes, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Login } from '../pages/login'
import { NewTask } from '../pages/NewTask'
import { EditTask } from '../pages/editTask'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nova-tarefa" element={<NewTask />} />
        <Route path="/editar-tarefa:taskId" element={<EditTask />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  )
}
