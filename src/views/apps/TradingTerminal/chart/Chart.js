import React from 'react'

// ** TradingView
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets'

// ** ReactStrap
import { Col, Row } from 'reactstrap'

const Chart = () => {
  return (
    <Col>
      <Row>
        <AdvancedRealTimeChart
          theme='dark'
          width='100%'
          height='400px'
          theme='dark'
        ></AdvancedRealTimeChart>
      </Row>
    </Col>
  )
}

export default Chart
