import React from 'react'

import { Row, Col, Table } from 'reactstrap'

// ** custom components
import LeadActivitySettings from './LeadActivitySettings'
import LeadActivityInfoCard from './LeadActivityInfoCard'

const LeadActivitySettingsPage = () => {
  return (
    <div>
      <div className=''>
        <LeadActivitySettings />
        <div style={{ height: '600px', overflowY: 'scroll' }}>
          <LeadActivityInfoCard />
          <LeadActivityInfoCard />
          <LeadActivityInfoCard />
          <LeadActivityInfoCard />
          <LeadActivityInfoCard />
          <LeadActivityInfoCard />
          <LeadActivityInfoCard />
        </div>
      </div>
    </div>
  )
}

export default LeadActivitySettingsPage
