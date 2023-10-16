import React from 'react'

// ** icons
import { RiAlarmLine, RiDeleteBin5Fill } from 'react-icons/ri'
import { MdAdd } from 'react-icons/md'

import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'

const AlertDropdown = () => {
  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' onClick={(e) => e.preventDefault()}>
        <RiAlarmLine size={20} />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <div>
            <h6>Price alerts</h6>
            <div>
              <RiDeleteBin5Fill />
              <MdAdd />
            </div>
          </div>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <span>Get notified instantly about price movements</span>
          <Button outline>
            <MdAdd /> <span>New Alert</span>
          </Button>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default AlertDropdown
