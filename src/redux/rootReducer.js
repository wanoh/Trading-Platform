// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import chat from '@src/views/apps/chat/store'
import dataTables from '@src/views/tables/data-tables/store'
import permissions from '@src/views/apps/roles-permissions/store'
import users from '../views/revive/users/store'

const rootReducer = {
  auth,
  chat,
  navbar,
  layout,
  dataTables,
  permissions,
  users,
}

export default rootReducer
