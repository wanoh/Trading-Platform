// ** React Imports
import { useEffect, useState } from 'react'

// ** Custom Components
import NavbarUser from './NavbarUser'

import { Button } from 'reactstrap'

// ** Toast
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { handleLogout } from '../../../../redux/authentication'
import { useDispatch } from 'react-redux'

// ** User data
const userData = JSON.parse(localStorage.getItem('userData'))

const ThemeNavbar = (props) => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props
  const [show, setShow] = useState(false)
  const [expirationTime, setExpirationTime] = useState(0)
  const [toastShown, setToastShown] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    setExpirationTime(userData.expirationTime)
  }, [userData])

  useEffect(() => {
    if (expirationTime > 0 && !toastShown) {
      const currentTime = new Date().getTime()
      const timeRemaining = Math.max(0, expirationTime - currentTime)

      const hours = Math.floor(timeRemaining / 3600000)
      const minutes = Math.floor((timeRemaining % 3600000) / 60000)
      const seconds = Math.floor((timeRemaining % 60000) / 1000)

      if (timeRemaining <= 60000) {
        const toastId = toast.error(() => (
          <div className='d-flex flex-column'>
            <h6>
              Expires in {hours}h {minutes}m {seconds}s
            </h6>
            <Button onClick={() => toast.dismiss(t.id)}>Dismiss</Button>
          </div>
        ))

        setToastShown(true)

        if (timeRemaining === 0) {
          dispatch(handleLogout())
          navigate('/login')
        }

        setTimeout(() => {
          toast.dismiss(toastId)
        }, timeRemaining)
      }
    }
  }, [expirationTime, toastShown])

  return (
    <>
      <NavbarUser skin={skin} setSkin={setSkin} />
    </>
  )
}

export default ThemeNavbar
