// ** React Imports
import { Link } from 'react-router-dom'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import openEditSlider from './SidebarEditTransaction'
import { store } from '@store/store'
import { getUser, deleteUser } from '../../../../apps/user/store'

// ** Icons Imports
import { Trash2, Edit } from 'react-feather'

// ** Reactstrap Imports
import { Badge, Progress } from 'reactstrap'
import { formatNumberWithCommas } from '../../../../../utility/Utils'

const statusObj = {
  Completed: 'light-success',
  Initiated: 'light-info',
  Processing: 'light-warning',
  Litigated: 'light-danger',
  Forex: 'light-warning',
  Stocks: 'light-primary',
  CDFs: 'light-secondary',
  'Crypto Currency': 'light-info',
}

const progressObj = {
  Completed: 'success',
  Initiated: 'info',
  Processing: 'warning',
  Litigated: 'danger',
}

export const columns = [
  {
    name: 'ID',
    sortable: true,
    minWidth: 'auto',
    sortField: 'userId',
    selector: (row) => row.userId,
    cell: (row) => row.userId,
  },
  {
    name: 'Company',
    minWidth: '138px',
    sortable: true,
    sortField: 'company',
    selector: (row) => row.company,
    cell: (row) => <span className='text-capitalize'>{row.company}</span>,
  },
  {
    name: 'Reason',
    minWidth: '138px',
    selector: (row) => row.reason,
    cell: (row) => <span className='text-capitalize'>{row.reason}</span>,
  },
  {
    name: 'Status',
    minWidth: '124px',
    sortable: true,
    sortField: 'progressStatus',
    selector: (row) => row.progressStatus,
    cell: (row) => (
      <Badge
        className='text-capitalize'
        color={statusObj[row.progressStatus]}
        pill
      >
        {row.progressStatus}
      </Badge>
    ),
  },
  {
    name: 'Amount',
    minWidth: '134px',
    sortable: true,
    sortField: 'depositAmount',
    selector: (row) => row.depositAmount,
    cell: (row) => (
      <span className='text-capitalize'>
        {formatNumberWithCommas(row.depositAmount)}
      </span>
    ),
  },
  {
    name: 'Progress',
    minWidth: '238px',
    sortable: true,
    sortField: 'progress',
    selector: (row) => row.id,
    cell: (row) => (
      <Progress
        className={`progress-bar-${progressObj[row.progressStatus]} w-100`}
        value={row.id}
        style={{ height: '8px' }}
      />
    ),
  },
  {
    name: 'Date',
    minWidth: '142px',
    sortable: true,
    sortField: 'date',
    selector: (row) => row.date,
    cell: (row) => <span className='text-capitalize'>{row.date}</span>,
  },
  {
    name: 'Market',
    minWidth: '150px',
    sortable: true,
    sortField: 'market',
    selector: (row) => row.market,
    cell: (row) => (
      <Badge className='text-capitalize' color={statusObj[row.market]} pill>
        {row.market}
      </Badge>
    ),
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: (row) => {
      const dispatch = useDispatch()

      const handleEditClick = () => {
        dispatch(openEditSlider(row))
      }

      return (
        <div className='d-flex gap-1'>
          <div>
            <Link onClick={handleEditClick}>
              <Edit size={14} className='me-50' />
            </Link>
          </div>
          <div
            tag='a'
            href='/'
            className='w-100'
            onClick={(e) => {
              e.preventDefault()
              // You can add code here to handle other actions if needed.
            }}
          >
            <Trash2 size={14} className='me-50' />
          </div>
        </div>
      )
    },
  },
]
