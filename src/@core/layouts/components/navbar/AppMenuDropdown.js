// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import { TbGridDots } from 'react-icons/tb'
import { MdCandlestickChart, MdGroup } from 'react-icons/md'
import { AiOutlineAppstoreAdd, AiFillMacCommand } from 'react-icons/ai'

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap'

const AppMenuDropdown = () => {
  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' onClick={(e) => e.preventDefault()}>
        <div>
          <TbGridDots size={20} />
        </div>
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to='/'>
          <div>
            <AiOutlineAppstoreAdd />
          </div>
          <span className='align-middle'>Traders Area </span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/tickets'>
          <div>
            <MdCandlestickChart />
          </div>
          <span className='align-middle'>Exness Terminal</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/'>
          <div>
            <AiFillMacCommand />
          </div>
          <span className='align-middle'>Public Website </span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/tickets'>
          <div>
            <MdGroup />
          </div>
          <span className='align-middle'>Partnership</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default AppMenuDropdown
