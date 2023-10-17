import React, { useState } from 'react'
import { BsStackOverflow } from 'react-icons/bs'
import { TbArrowZigZag, TbDotsVertical } from 'react-icons/tb'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const PillFilled = () => {
  const [active, setActive] = useState('1')

  const toggle = (tab) => {
    setActive(tab)
  }
  return (
    <React.Fragment>
      <Nav pills fill className='justify-content-between'>
        <div className='d-flex align-items-center'>
          <NavItem>
            <NavLink
              active={active === '1'}
              onClick={() => {
                toggle('1')
              }}
            >
              Open
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '2'}
              onClick={() => {
                toggle('2')
              }}
            >
              Pending
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '3'}
              onClick={() => {
                toggle('3')
              }}
            >
              Close
            </NavLink>
          </NavItem>
        </div>
        <div className='d-flex align-items-center gap-1'>
          {active === '1' && <BsStackOverflow size={20} />}
          <TbArrowZigZag size={20} />
          <TbDotsVertical size={20} />
        </div>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <div
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '100px' }}
          >
            <p>No Open Orders</p>
          </div>
        </TabPane>
        <TabPane tabId='2'>
          <div
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '100px' }}
          >
            <p>No Pending Orders</p>
          </div>
        </TabPane>
        <TabPane tabId='3'>
          <div
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '100px' }}
          >
            <p>No Closed Orders</p>
          </div>
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default PillFilled
