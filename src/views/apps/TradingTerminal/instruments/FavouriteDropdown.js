// ** React Imports
import { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'

// ** Reactstrap Imports
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

const Favourites = () => {
  // ** States
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <ButtonDropdown
      isOpen={dropdownOpen}
      toggle={toggleDropdown}
      className='w-100'
    >
      <DropdownToggle
        color='primary'
        className='d-flex justify-content-between'
        style={{ textAlign: 'start' }}
      >
        <span>Markets</span>
        <MdArrowDropDown />
      </DropdownToggle>
      <DropdownMenu className='w-100'>
        {[
          'Popular',
          'Top Movers',
          'Majors',
          'Minors',
          'Metals ',
          'Crypto',
          'Indices',
          'Stocks',
        ].map((item) => (
          <DropdownItem
            key={item}
            href='/'
            tag='a'
            onClick={(e) => e.preventDefault()}
          >
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
  )
}
export default Favourites
