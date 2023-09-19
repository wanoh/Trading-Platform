// ** React Imports
import { lazy } from 'react'

const Settings = lazy(() => import('../../views/revive/deposits'))

const AppRoutes = [
  {
    element: <Settings />,
    path: '/settings',
  },
]

export default AppRoutes
