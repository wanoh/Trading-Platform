// ** Dropdowns Imports
import UserDropdown from './UserDropdown'
import AppMenuDropdown from './AppMenuDropdown'
import AlertDropdown from './AlertDropdown'
import AccountDetails from './AccountDropdown'
import StackedCardGroup from '../../../../components/StackCards'

// ** Third Party Components
import { Sun, Moon } from 'react-feather'

// ** Reactstrap Imports
import {
  Button,
  Card,
  CardTitle,
  Container,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavbarUser = (props) => {
  // ** Props
  const { skin, setSkin } = props

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    <>
      <div className='me-auto d-flex align-items-center justify-content-center'>
        <ul className='nav navbar-nav'>
          <NavItem>
            <Link
              to='/'
              className='navbar-brand d-flex align-items-center justify-content-center'
            >
              <span className='brand-logo'>
                {/* <img src={themeConfig.app.appLogoImage} alt='logo' /> */}
              </span>
              <h2 className='brand-text mb-0 text-primary'>Exness</h2>
            </Link>
          </NavItem>
        </ul>
      </div>
      <div className='d-flex align-items-center justify-content-center'>
        <StackedCardGroup />
      </div>
      <ul className='nav navbar-nav align-items-center justify-content-between ms-auto w-50'>
        <AccountDetails />
        <NavItem className='d-none d-lg-block'>
          <NavLink className='nav-link-style'>
            <ThemeToggler />
          </NavLink>
        </NavItem>
        <AlertDropdown />
        <AppMenuDropdown />
        <UserDropdown />

        <Button color='primary' outline>
          Deposit
        </Button>
      </ul>
    </>
  )
}
export default NavbarUser
