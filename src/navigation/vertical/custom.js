// ** Icons Import
import {
  User,
  Users,
  Download,
  Upload,
  CreditCard,
  File,
  ShoppingBag,
  Settings,
  LogOut,
  Home,
} from 'react-feather'

export default [
  {
    id: 'users',
    title: 'Users',
    icon: <Users size={20} />,
    navLink: '/users',
  },
  {
    id: 'agents',
    title: 'Agents',
    icon: <User size={20} />,
  },
  {
    id: 'deposits',
    title: 'Deposits',
    icon: <Download size={20} />,
  },
  {
    id: 'withdrawals',
    title: 'Withdrawals',
    icon: <Upload size={20} />,
  },
  {
    id: 'payments',
    title: 'Payments',
    icon: <CreditCard size={20} />,
  },
  {
    id: 'tickets',
    title: 'Tickets',
    icon: <File size={20} />,
  },
  {
    id: 'businesspProfile',
    title: 'Business Profile',
    icon: <ShoppingBag size={20} />,
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: <Settings size={20} />,
  },
  {
    id: 'logout',
    title: 'Logout',
    icon: <LogOut size={20} />,
  },
]
