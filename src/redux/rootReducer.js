// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import chat from '@src/views/revive/tickets/chat/store'
import users from '@src/views/revive/users/store'

const rootReducer = {
  auth,
  chat,
  navbar,
  layout,
  users,
}

export default rootReducer
