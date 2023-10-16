import React from 'react'

// ** Components Imports
import Favourites from './FavouriteDropdown'

// ** Reactstrap
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Input,
  InputGroup,
  InputGroupText,
} from 'reactstrap'

// ** Icons
import {
  BsThreeDotsVertical,
  BsArrowsAngleContract,
  BsSearch,
} from 'react-icons/bs'
import { AiOutlineAppstore } from 'react-icons/ai'
import InstrumentsTable from './Table'

const Instruments = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='fs-6'>INSTRUMENTS</CardTitle>
        <div className='d-flex gap-1'>
          <BsThreeDotsVertical size={20} />
          <AiOutlineAppstore size={20} />
          <BsArrowsAngleContract size={18} />
        </div>
      </CardHeader>
      <CardBody>
        <InputGroup className='input-group-merge mb-2'>
          <InputGroupText>
            <BsSearch />
          </InputGroupText>
          <Input placeholder='Search' />
        </InputGroup>
        <Favourites />
      </CardBody>
      <InstrumentsTable />
    </Card>
  )
}

export default Instruments
