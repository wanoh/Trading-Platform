// ** User List Component
import Table from './Table'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from './StatsHorizontal'

// ** Images
import AgentImage from '../../../../assets/images/revive/support.png'
import ActiveAgent from '../../../../assets/images/revive/activeAgent.png'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UsersList = () => {
  return (
    <div className='app-user-list'>
      <Row>
        <Col lg='6' xs='12'>
          <StatsHorizontal
            color='info'
            statTitle='Total Agents'
            img={AgentImage}
            renderStats={
              <>
                <h3 className='fw-bolder mb-75 text-nowrap d-flex align-items-center gap-1'>
                  10
                </h3>
              </>
            }
          />
        </Col>
        <Col lg='6' xs='12'>
          <StatsHorizontal
            color='success'
            statTitle='Active Agents'
            img={ActiveAgent}
            renderStats={
              <>
                <h3 className='fw-bolder mb-75 text-nowrap d-flex align-items-center gap-1'>
                  6
                </h3>
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
