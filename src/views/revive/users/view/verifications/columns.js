// ** Icons Imports
import { Eye, EyeOff } from 'react-feather'

// ** Reactstrap Imports
import { Badge, Button } from 'reactstrap'

const statusObj = {
  Completed: 'light-success',
  Pending: 'light-warning',
  'No Uploads': 'light-danger',
}

export const columns = [
  {
    name: 'Name',
    minWidth: '124px',
    selector: (row) => row.proof,
    cell: (row) => <div>{row.proof}</div>,
  },
  {
    name: 'Status',
    minWidth: '184px',
    selector: (row) => row.proofOfVerificationStatus,
    cell: (row) => (
      <div className='centered-cell'>
        <Badge
          className='text-capitalize'
          color={statusObj[row.proofOfVerificationStatus]}
          pill
        >
          {row.proofOfVerificationStatus}
        </Badge>
      </div>
    ),
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: (row) => (
      <div className='centered-cell'>
        {row.proofOfVerificationStatus === 'No Uploads' ? (
          <Button.Ripple
            className='round'
            disabled={true}
            outline
            style={{ padding: '12px 16px' }}
          >
            View <EyeOff size={16} className='ms-1 ' />
          </Button.Ripple>
        ) : (
          <Button.Ripple
            className='round'
            color='dark'
            outline
            style={{ padding: '12px 16px', border: '1px solid white' }}
          >
            View <Eye size={16} className='ms-1 ' />
          </Button.Ripple>
        )}
      </div>
    ),
  },
]
