import React from 'react'

import { Row, Col } from 'reactstrap'

// ** custom components
import LeadActivitySettings from './LeadActivitySettings'
import LeadActivityInfoCard from './LeadActivityInfoCard'

const LeadActivitySettingsPage = () => {
  return (
    <div>
      <div className=''>
        <Row>
          <Col xl='8' lg='7' xs='12'>
            <LeadActivitySettings />
          </Col>
          <Col xl='4' lg='5' xs='12'>
            <LeadActivityInfoCard />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default LeadActivitySettingsPage
