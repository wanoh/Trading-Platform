import React, { useState } from 'react'
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

const PreviewVertical = ({ title, doc, data }) => {
  const [active, setActive] = useState(1)

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return (
    <div>
      <Card>
        <h3 className='mt-3 text-center'>Proof Of {title ? title : 'Card'}</h3>
        <CardText className='text-center mb-3'>{doc ? doc : 'Card'}</CardText>
        <CardBody>
          <div className='nav-vertical'>
            <Nav tabs className='nav-right'>
              {data.map((doc) => (
                <NavItem>
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
                <TabPane tabId={doc.id}>
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
    </div>
  )
}
export default PreviewVertical
