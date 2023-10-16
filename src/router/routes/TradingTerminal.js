import { lazy } from 'react'

const TradingTerminal = lazy(() => import('../../views/apps/TradingTerminal'))

const AppRoutes = [
  {
    element: <TradingTerminal />,
    path: '/tradingterminal',
  },
]

export default AppRoutes
