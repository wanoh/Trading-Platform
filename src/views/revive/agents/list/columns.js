// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
import { getUser } from '../../users/store'

// ** Icons Imports
import { MoreVertical } from 'react-feather'

// ** Reactstrap Imports
import { Badge, Button } from 'reactstrap'

// ** Renders Client Columns
const renderClient = (row) => {
  return (
    <Avatar
      initials
      className='me-1'
      color={row.avatarColor || 'light-primary'}
      content={row.fullName || 'John Doe'}
    />
  )
}

const statusObj = {
  Offline: 'light-danger',
  Online: 'light-success',
  Gold: 'light-warning',
  Platinum: 'light-info',
  Silver: 'light-secondary',
}

export const columns = [
  {
    name: 'Agent',
    minWidth: '300px',
    selector: (row) => row.fullName,
    cell: (row) => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <span className='fw-bolder'>{row.fullName}</span>
          <small className='text-truncate text-muted mb-0'>{row.email}</small>
        </div>
      </div>
    ),
  },
  {
    name: 'Agent ID',
    minWidth: '124px',
    selector: (row) => row.userId,
    cell: (row) => row.userId,
  },

  {
    name: 'Assigned Users',
    minWidth: '180px',
    selector: (row) => row.verification,
    cell: (row) => <span className='text-capitalize'>{row.id}</span>,
  },
  {
    name: 'Status',
    minWidth: '124px',
    selector: (row) => row.onlineStatus,
    cell: (row) => (
      <Badge
        className='text-capitalize'
        color={statusObj[row.onlineStatus]}
        pill
      >
        {row.onlineStatus}
      </Badge>
    ),
  },
  {
    name: 'Actions',
    minWidth: '190px',
    cell: (row) => (
      <div className='d-flex gap-1'>
        <Link
          to={`/agent/view/${row.id}`}
          onClick={() => store.dispatch(getUser(row.id))}
          className='text-secondary'
        >
          <Button color='secondary' outline>
            Details
          </Button>
        </Link>
      </div>
    ),
  },
]
