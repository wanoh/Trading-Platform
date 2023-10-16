// ** React Imports
import { Link } from 'react-router-dom'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogout } from '@store/firebase.auth'

// ** Third Party Components

import { FaRegUserCircle } from 'react-icons/fa'

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap'

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle
        href='/'
        tag='a'
        className='nav-link dropdown-user-link'
        onClick={(e) => e.preventDefault()}
      >
        <div>
          <FaRegUserCircle size={20} />
        </div>
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to='/'>
          <span className='align-start'>Support </span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/tickets'>
          <span className='align-start'>Suggest a feature</span>
        </DropdownItem>

        <DropdownItem divider />

        <DropdownItem
          tag={Link}
          to='/login'
          onClick={() => dispatch(handleLogout())}
        >
          <span className='align-start'>Sign Out</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
