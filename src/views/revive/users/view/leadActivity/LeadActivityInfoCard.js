// ** React Imports
import { useState, Fragment } from 'react'

// ** Reactstrap Imports
import { Card, CardBody, Badge, Row, Col, Alert } from 'reactstrap'

// ** Icons Imports
import { LuActivitySquare } from 'react-icons/lu'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const LeadActivityInfoCard = ({
  callStatus,
  leadStatus,
  leadClosingStatus,
  date,
  time,
}) => {
  return (
    <>
      <Card>
        <CardBody className='d-flex align-items-center justify-content-center'>
          <div className='w-100'>
            <div className='border-bottom pt-1 d-flex justify-content-between'>
              <h6>Lead Activity Details </h6>
              {date || '18/09/2023'} - {time || '10:03:30 am'}{' '}
            </div>
            <div className='pt-2 d-flex justify-content-center flex-column'>
              <dl>
                <Row>
                  <Col sm='6'>
                    <dt>
                      <strong>Last Call Status</strong>
                    </dt>
                  </Col>
                  <Col sm='6'>
                    <dd>
                      <Badge color='success'>
                        {callStatus || 'Answer on first ring'}
                      </Badge>
                    </dd>
                  </Col>
                </Row>
              </dl>
              <dl>
                <Row>
                  <Col sm='6'>
                    <dt>
                      <strong>Lead Status </strong>
                    </dt>
                  </Col>
                  <Col sm='6'>
                    <dd>
                      <Badge color='secondary'>
                        {leadStatus || 'Need More information'}
                      </Badge>
                    </dd>
                  </Col>
                </Row>
              </dl>
              <dl>
                <Row>
                  <Col sm='6'>
                    <dt>
                      <strong>Lead Closing Status</strong>
                    </dt>
                  </Col>
                  <Col sm='6'>
                    <dd>
                      <Badge color='secondary'>
                        {leadClosingStatus || 'FTD X2 - Retention X2'}
                      </Badge>
                    </dd>
                  </Col>
                </Row>
              </dl>
              <Alert color='success'>
                <div className='p-1'>
                  <h6 className='text-success'>Notable Details</h6>
                  <small>
                    List of notable details after conversation with client
                  </small>
                </div>
              </Alert>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default LeadActivityInfoCard
