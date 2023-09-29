import mock from './mock'

import './jwt'
import './apps/chat'
import './apps/userList'
import './tables/datatables'
import './navbar/navbarSearch'

mock.onAny().passThrough()
