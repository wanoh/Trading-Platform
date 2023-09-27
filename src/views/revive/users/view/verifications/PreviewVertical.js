// ** React
import React, { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Card,
  CardBody,
  CardText,
  Col,
  Row,
} from 'reactstrap'

const PreviewVertical = ({ title, docType, data, open, toggleSidebar }) => {
  const [active, setActive] = useState(1)

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return (
    <Sidebar
      size='xl'
      open={open}
      title='Verification Details'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <Card>
        <h3 className='mt-3 text-center'>{title ? title : 'Proof Of Card'}</h3>
        <CardText className='text-center mb-3'>
          {docType ? docType : 'Card'}
        </CardText>
        <CardBody>
          <div className='nav-vertical'>
            <Nav tabs className='nav-right'>
              {data.map((doc) => (
                <NavItem key={doc.id}>
                  <NavLink
                    active={active === doc.id}
                    onClick={() => {
                      toggle(doc.id)
                    }}
                  >
                    <Button className='h-50'>{doc.btnText}</Button>
                  </NavLink>
                </NavItem>
              ))}
            </Nav>

            <TabContent activeTab={active}>
              {data.map((doc) => (
                <TabPane key={doc.id} tabId={doc.id}>
                  <div
                    style={{
                      border: '1px dashed #ffffff1a',
                    }}
                    className='d-flex align-items-center justify-content-center p-2'
                  >
                    <img src={doc.img} alt='' className='w-100' />
                  </div>
                </TabPane>
              ))}
            </TabContent>
          </div>
        </CardBody>
      </Card>
    </Sidebar>
  )
}
export default PreviewVertical
