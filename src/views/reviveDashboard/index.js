// ** React Imports
import { useContext } from 'react'

// ** Images
import userImg from '../../assets/images/revive/userImg.png'
import agent from '../../assets/images/revive/support.png'

// ** Icons
import { User, Feather } from 'react-feather'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Demo Components
import BasicTransactionsTable from './BasicTransactionsTable'
import WelcomeCard from './CardWelcome'
import StatsCard from './CardStats'
import IncomingRecoveriesChart from './ApexDonutChart'
import DoughnutChart from './ChartjsDoughnutChart'

// ** Third Party Components
import 'chart.js/auto'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const Users = () => {
  const balanceLabel = ['Total Available', 'Total']
  const transactionsLabel = ['Deposits', 'Withdrawals']

  const { colors } = useContext(ThemeColors),
    { skin } = useSkin(),
    labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
    tooltipShadow = 'rgba(0, 0, 0, 0.25)',
    gridLineColor = 'rgba(200, 200, 200, 0.2)',
    lineChartPrimary = '#666ee8',
    lineChartDanger = '#ff4961',
    warningColorShade = '#FF9F43',
    warningLightColor = '#FDAC34',
    successColorShade = '#01B401',
    primaryColorShade = '#836AF9',
    infoColorShade = '#299AFF',
    yellowColor = '#ffe800',
    greyColor = '#4F5D70',
    blueColor = '#2c9aff',
    blueLightColor = '#84D0FF',
    greyLightColor = '#EDF1F4'

  return (
    <div id='app-dashboard'>
      <Row className='match-height'>
        <Col lg='6' sm='12'>
          <WelcomeCard />
        </Col>
        <Col lg='3' sm='6'>
          <StatsCard
            header={'Users'}
            title={'Total'}
            value={102}
            percentage={42}
            increment={10}
            icon={<User size={20} />}
            img={userImg}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsCard
            header={'Agents'}
            title={'Total'}
            value={82}
            percentage={22}
            increment={14}
            icon={<Feather size={20} />}
            img={agent}
          />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='4' xs='12'>
          <DoughnutChart
            title={'Balance'}
            dataset1={{
              name: 'Total ',
              value: '53201',
            }}
            dataset2={{
              name: 'Total Available',
              value: '23948',
            }}
            tooltipShadow={tooltipShadow}
            successColorShade={successColorShade}
            color1={warningLightColor}
            color2={successColorShade}
          />
        </Col>
        <Col lg='4' xs='12'>
          <IncomingRecoveriesChart />
        </Col>
        <Col lg='4' xs='12'>
          <DoughnutChart
            title={'Transactions'}
            dataset1={{ name: 'Deposits', value: '3245' }}
            dataset2={{ name: 'Withdrawals', value: '2873' }}
            tooltipShadow={tooltipShadow}
            successColorShade={successColorShade}
            color1={greyLightColor}
            color2={blueLightColor}
          />
        </Col>
      </Row>
      <Row className='match-heights'>
        <Col lg='6' xs='12'>
          <BasicTransactionsTable title={'Deposits'} />
        </Col>
        <Col lg='6' xs='12'>
          <BasicTransactionsTable title={'Withdrawals'} />
        </Col>
      </Row>
    </div>
  )
}

export default Users
