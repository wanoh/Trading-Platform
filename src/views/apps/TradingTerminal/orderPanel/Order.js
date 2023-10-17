import React from 'react'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  Container,
  Progress,
} from 'reactstrap'

// ** Icons
import { RiListSettingsLine, RiCloseLine } from 'react-icons/ri'
import { TbClick } from 'react-icons/tb'

const Order = () => {
  return (
    <Card>
      <CardHeader>
        <div className='d-flex align-items-center gap-1'>
          <div className='rounded-circle border p-1'>
            <BsCurrencyBitcoin size={20} />
          </div>
          <span>BTC</span>
        </div>
        <div className='rounded border p-1'>
          <RiListSettingsLine size={20} className='me-1' />
          <TbClick size={20} />
        </div>
        <RiCloseLine size={20} />
      </CardHeader>
      <CardBody>
        <Container className='d-flex position-relative mb-1'>
          <div className='border p-2 me-1'>
            <CardSubtitle>Sell</CardSubtitle>
            <span>26,853.08</span>
          </div>
          <div className='border p-2'>
            <CardSubtitle>Buy</CardSubtitle>
            <span>26,853.58</span>
          </div>
          <span className='position-absolute end-50 bottom-0'>0.00 USD</span>
        </Container>
        <Progress multi>
          <Progress bar color='danger' value={25}>
            25%
          </Progress>
          <Progress bar color='info' value={75}>
            75%
          </Progress>
        </Progress>
      </CardBody>
    </Card>
  )
}

export default Order
