// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
import { getUser, deleteUser } from '../../apps/user/store'

// ** Icons Imports
import { Trash2, Edit } from 'react-feather'

// ** Reactstrap Imports
import { Badge } from 'reactstrap'

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
  Approved: 'light-success',
  New: 'light-warning',
  Declined: 'light-danger',
  Bank: 'light-primary',
  'Crypto Currency': 'light-info',
  Paypal: 'light-danger',
  'Credit Card': 'light-warning',
}

export const columns = [
  {
    name: 'User',
    sortable: true,
    minWidth: '300px',
    sortField: 'fullName',
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
    name: 'User ID',
    sortable: true,
    minWidth: '124px',
    sortField: 'userId',
    selector: (row) => row.userId,
    cell: (row) => row.userId,
  },
  {
    name: 'Amount',
    minWidth: '138px',
    sortable: true,
    sortField: 'depositAmount',
    selector: (row) => row.depositAmount,
    cell: (row) => <span className='text-capitalize'>{row.depositAmount}</span>,
  },
  {
    name: 'Status',
    minWidth: '124px',
    sortable: true,
    sortField: 'transactionStatus',
    selector: (row) => row.transactionStatus,
    cell: (row) => (
      <Badge
        className='text-capitalize'
        color={statusObj[row.transactionStatus]}
        pill
      >
        {row.transactionStatus}
      </Badge>
    ),
  },
  {
    name: 'Date',
    minWidth: '180px',
    sortable: true,
    sortField: 'date',
    selector: (row) => row.date,
    cell: (row) => <span className='text-capitalize'>{row.date}</span>,
  },
  {
    name: 'Type',
    minWidth: '184px',
    sortable: true,
    sortField: 'type',
    selector: (row) => row.type,
    cell: (row) => (
      <Badge className='text-capitalize' color={statusObj[row.type]} pill>
        {row.type}
      </Badge>
    ),
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: (row) => (
      <div className='d-flex gap-1'>
        <div>
          <Link
            to={`/user/view/${row.id}`}
            className='user_name text-truncate text-body'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <Edit size={14} className='me-50' />
          </Link>
        </div>
        <div
          tag='a'
          href='/'
          className='w-100'
          onClick={(e) => {
            e.preventDefault()
            store.dispatch(deleteUser(row.id))
          }}
        >
          <Trash2 size={14} className='me-50' />
        </div>
      </div>
    ),
  },
]
