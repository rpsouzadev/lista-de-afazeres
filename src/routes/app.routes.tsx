import { Navigate, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/home'
import { NewTask } from '../pages/NewTask'
import { EditTask } from '../pages/editTask'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nova-tarefa" element={<NewTask />} />
        <Route path="/editar-tarefa/:id" element={<EditTask />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}
