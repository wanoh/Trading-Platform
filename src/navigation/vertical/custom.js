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
    id: 'user',
    title: 'Users',
    icon: <Users size={20} />,
    navLink: '/user',
  },
  {
    id: 'agents',
    title: 'Agents',
    icon: <User size={20} />,
    navLink: '/agent',
  },
  {
    id: 'deposits',
    title: 'Deposits',
    icon: <Download size={20} />,
    navLink: '/deposits',
  },
  {
    id: 'withdrawals',
    title: 'Withdrawals',
    icon: <Upload size={20} />,
    navLink: '/withdrawals',
  },
  {
    id: 'payments',
    title: 'Payments',
    icon: <CreditCard size={20} />,
    navLink: '/Payments',
  },
  {
    id: 'tickets',
    title: 'Tickets',
    icon: <File size={20} />,
    navLink: '/tickets',
  },
  {
    id: 'businesspProfile',
    title: 'Business Profile',
    icon: <ShoppingBag size={20} />,
    navLink: '/business-profile',
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: <Settings size={20} />,
    navLink: '/settings',
  },
  {
    id: 'logout',
    title: 'Logout',
    icon: <LogOut size={20} />,
  },
]
