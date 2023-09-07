// ** Reactstrap Imports
import { Card, CardImgOverlay, CardImg, CardText } from 'reactstrap'

import BgImg from '../../assets/images/revive/backgroundimg.jpg'
// ** Images

const CardCongratulations = () => {
  return (
    <Card className='card-welcome '>
      <CardImg className='card-welcome_bg' src={BgImg}></CardImg>
      <CardImgOverlay className='card-bg-overlay'>
        <div className='card-welcome_text-content h-100 d-flex flex-column  justify-content-center'>
          <CardText className='mb-1 header-text'>Hello Admin,</CardText>
          <CardText>
            Welcome back, you have full admin priviledges to manage all company
            data
          </CardText>
        </div>
      </CardImgOverlay>
    </Card>
  )
}

export default CardCongratulations
