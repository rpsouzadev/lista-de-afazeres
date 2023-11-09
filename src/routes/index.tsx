import { Route, Routes, Navigate } from 'react-router-dom'

import { Home } from '../pages/home'
import { Login } from '../pages/login'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  )
}
