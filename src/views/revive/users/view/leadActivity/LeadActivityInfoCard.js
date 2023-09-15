// ** React Imports
import { useState, Fragment } from 'react'

// ** Reactstrap Imports
import { Card, CardBody, Badge } from 'reactstrap'

// ** Icons Imports
import { LuActivitySquare } from 'react-icons/lu'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const LeadActivityInfoCard = ({
  callStatus,
  leadStatus,
  leadClosingStatus,
  status,
}) => {
  return (
    <>
      <Card>
        <CardBody className='d-flex align-items-center justify-content-center flex-column'>
          <div className='d-flex flex-column align-items-center justify-content-center mb-2'>
            <div
              className='rounded-circle bg-secondary d-flex align-items-center justify-content-center'
              style={{ width: '100px', height: '100px' }}
            >
              <LuActivitySquare size={46} />
            </div>
            <h6 className='text-center mt-2 h4 '>Lead Activity</h6>
          </div>
          <div className='w-100'>
            <h6 className='border-top border-bottom pt-1 pb-1'>
              Lead Activity Details
            </h6>
            <p>
              <strong>Last Call Status:</strong>{' '}
              {callStatus || 'Answer on first ring'}
            </p>
            <p>
              <strong>Lead Status:</strong>{' '}
              {leadStatus || 'Need More information'}{' '}
            </p>
            <p>
              <strong>Lead Closing Status:</strong>{' '}
              {leadClosingStatus || 'FTD X2 - Retention X2'}{' '}
            </p>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default LeadActivityInfoCard
