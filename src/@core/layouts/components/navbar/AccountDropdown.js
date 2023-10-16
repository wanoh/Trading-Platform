import React from 'react'

// ** icons
import { MdArrowDropDown } from 'react-icons/md'

import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'

const AccountDropdown = () => {
  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' onClick={(e) => e.preventDefault()}>
        <div>
          <h6>DEMO</h6>
          <span>Zero</span>
        </div>
        <div className='d-flex'>
          <h3>1,500.00 USD</h3>
          <MdArrowDropDown />
        </div>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <span>Balance</span>
          <span>1,500.00 USD</span>
          <Button>Top Up</Button>
        </DropdownItem>
        <DropdownItem divider />
        <span>CHOOSE AN ACCOUNT</span>
        <DropdownItem divider />
        <span>Manage Accounts</span>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default AccountDropdown
