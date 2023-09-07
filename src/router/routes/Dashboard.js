// ** React Imports
import { lazy } from 'react'

const Dashboard = lazy(() => import('../../views/reviveDashboard'))

const AppRoutes = [
  {
    element: <Dashboard />,
    path: '/dashboard',
    meta: {
      appLayout: true,
      className: 'dashboard',
    },
  },
]

export default AppRoutes
