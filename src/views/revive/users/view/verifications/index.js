import React from 'react'

// ** Components
import Table from './Table'
import Preview from './PreviewVertical'
import { data } from './data'

// ** Reactstrap Imports
import { Col, Row } from 'reactstrap'

const index = () => {
  return (
    <>
      <Row>
        <Table />
        <Preview title='Identity' data={data} doc='Ghana Card' />
      </Row>
    </>
  )
}

export default index
