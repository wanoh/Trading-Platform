import React from 'react'

// ** Instrument Tables
import InstrumentTable from './instruments/Instruments'
import Chart from './chart/TradingViewChart'
import { Col, Row } from 'reactstrap'
import OrderPanel from './orderPanel/Order'
import OrdersTable from './ordersTable'

const TradingTerminal = () => {
  return (
    <Row>
      <Col sm='3'>
        <InstrumentTable />
      </Col>
      <Col sm='6'>
        <div className='mb-3'>
          <Chart />
        </div>
        <OrdersTable />
      </Col>
      <Col sm='3'>
        <OrderPanel />
      </Col>
    </Row>
  )
}

export default TradingTerminal
