// ** Reactstrap Imports
import { Card, CardImg, CardText } from 'reactstrap'

// ** React-feather
import { Users } from 'react-feather'

// ** Images
import userImg from '../../../../assets/images/revive/userImg.png'

const CardStats = () => {
  return (
    <Card className='card-stats text-justify p-2'>
      <div className='d-flex justify-content-center align-items-center card-stats_container'>
        <div>
          <div className='icon-opacity-bg d-flex flex-column justify-content-center align-items-center'>
            {<Users size={20} />}
          </div>
          <CardText className='mb-1 font-weight-bold'>Users</CardText>
          <CardText>Total</CardText>
          <CardText>102</CardText>
          <CardText className='icon-opacity-bg-2 d-flex flex-column justify-content-center align-items-center'>
            +42%
          </CardText>
          <CardText className='flex-nowrap'>+10 in 2 weeks</CardText>
        </div>
        <CardImg src={userImg} className='w-200'></CardImg>
      </div>
    </Card>
  )
}

export default CardStats
