// ** React Imports
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const UserList = lazy(() => import('../../views/users'))

const AppRoutes = [
  {
    element: <UserList />,
    path: '/users',
    meta: {
      appLayout: true,
      className: 'users',
    },
  },
]

export default AppRoutes
