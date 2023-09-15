// ** User List Component
import Table from './Table'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from './StatsHorizontal'

// ** Icons Imports
import { PlusSquare, XOctagon } from 'react-feather'
import { FaFileInvoiceDollar } from 'react-icons/fa6'
import { BsFillClipboard2CheckFill } from 'react-icons/bs'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UsersList = () => {
  return (
    <div className='app-user-list'>
      <Row>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='info'
            statTitle='Total Depsoits'
            icon={<FaFileInvoiceDollar size={20} />}
            renderStats={
              <>
                <h3 className='fw-bolder mb-75 text-nowrap d-flex align-items-center gap-1'>
                  8,491,729
                  <span className='fs-6 fw-lighter text-success'>(+32%)</span>
                </h3>
                <p className='fs-6'>This Week's Analytics</p>
              </>
            }
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='warning'
            statTitle='New Deposits'
            icon={<PlusSquare size={20} />}
            renderStats={
              <>
                <h3 className='fw-bolder mb-75 text-nowrap d-flex align-items-center gap-1'>
                  49,230
                  <span className='fs-6 fw-lighter text-success'>(+23%)</span>
                </h3>
                <p className='fs-6'>This Week's Analytics</p>
              </>
            }
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='Approved Deposits'
            icon={<BsFillClipboard2CheckFill size={20} />}
            renderStats={
              <>
                <h3 className='fw-bolder mb-75 text-nowrap d-flex align-items-center gap-1'>
                  11,324
                  <span className='fs-6 fw-lighter text-danger'>(-12%)</span>
                </h3>
                <p className='fs-6'>This Week's Analytics</p>
              </>
            }
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='Declined Deposits'
            icon={<XOctagon size={20} />}
            renderStats={
              <>
                <h3 className='fw-bolder mb-75 text-nowrap d-flex align-items-center gap-1'>
                  9,841
                  <span className='fs-6 fw-lighter text-success'>(+12%)</span>
                </h3>
                <p className='fs-6'>This Week's Analytics</p>
              </>
            }
          />
        </Col>
      </Row>
      <Table />
    </div>
  )
}

export default UsersList
