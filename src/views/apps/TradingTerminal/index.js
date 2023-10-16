import React from 'react'

// ** Instrument Tables
import InstrumentTable from './instruments/Instruments'
import Chart from './chart/TradingViewChart'
import { Col, Row } from 'reactstrap'
import Order from './order/Order'

const TradingTerminal = () => {
  return (
    <Row>
      <Col sm='3'>
        <InstrumentTable />
      </Col>
      <Col sm='6'>
        <Chart />
      </Col>
      <Col sm='3'>
        <Order />
      </Col>
    </Row>
  )
}

export default TradingTerminal
