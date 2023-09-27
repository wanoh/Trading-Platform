// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
import { getUser, deleteUser } from '../../store'

// ** Icons Imports
import { Trash2, Edit } from 'react-feather'

// ** Reactstrap Imports
import { Badge, Progress } from 'reactstrap'
import { formatNumberWithCommas } from '../../../../../utility/Utils'

const statusObj = {
  Approved: 'light-success',
  Pending: 'light-warning',
  New: 'light-warning',
  Declined: 'light-danger',
  Bank: 'light-primary',
  'Crypto Currency': 'light-info',
  Paypal: 'light-danger',
  'Credit Card': 'light-warning',
}

export const columns = (handleEditClick) => [
  {
    name: 'ID',
    sortable: true,
    minWidth: '124px',
    sortField: 'userId',
    selector: (row) => row.userId,
    cell: (row) => row.userId,
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
    name: 'Date',
    minWidth: '124px',
    sortable: true,
    sortField: 'date',
    selector: (row) => row.date,
    cell: (row) => <span className='text-capitalize'>{row.date}</span>,
  },
  {
    name: 'Amount',
    minWidth: '138px',
    sortable: true,
    sortField: 'depositAmount',
    selector: (row) => row.depositAmount,
    cell: (row) => (
      <span className='text-capitalize'>
        ${formatNumberWithCommas(row.depositAmount)}
      </span>
    ),
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
    name: 'Actions',
    minWidth: '100px',
    cell: (row) => (
      <div className='d-flex gap-1'>
        <div>
          <Edit
            size={14}
            className='me-50'
            onClick={() => handleEditClick(row)}
          />
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
