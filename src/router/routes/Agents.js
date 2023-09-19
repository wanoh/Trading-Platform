// ** React Imports
import { lazy } from 'react'

const AgentsList = lazy(() => import('../../views/revive/agents/list'))
const AgentView = lazy(() => import('../../views/revive/agents/view'))

const AppRoutes = [
  {
    element: <AgentsList />,
    path: '/agent',
  },
  {
    element: <AgentView />,
    path: '/agent/view/:id',
  },
]

export default AppRoutes
