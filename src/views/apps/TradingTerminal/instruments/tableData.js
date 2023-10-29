import axios from 'axios'
import { Badge } from 'reactstrap'
import { setActiveInstrument, setSelectedInstruments } from '../store'
import { store } from '../../../../redux/store'

const handleInstrumentChange = (data) => {
  store.dispatch(setActiveInstrument(data))
  store.dispatch(setSelectedInstruments(data))
}

// ** Table ReOrder Column
export const reOrderColumns = [
  {
    name: 'Symbol',
    reorder: true,
    sortable: true,
    maxWidth: '100px',
    selector: (row) => (
      <Badge
        color='info'
        className='cursor-pointer'
        onClick={() => handleInstrumentChange(row.symbol)}
      >
        {row.symbol}
      </Badge>
    ),
    style: {
      position: 'sticky',
      left: 0,
      zIndex: 1,
    },
  },
  {
    name: 'Signal',
    reorder: true,
    sortable: true,
    minWidth: '225px',
    selector: (row) => row.signal,
  },
  {
    name: 'Bid',
    reorder: true,
    sortable: true,
    minWidth: '310px',
    selector: (row) => row.bid,
  },
  {
    name: 'Ask',
    reorder: true,
    sortable: true,
    minWidth: '250px',
    selector: (row) => row.ask,
  },
  {
    name: '1D change',
    reorder: true,
    sortable: true,
    minWidth: '100px',
    selector: (row) => row.change,
  },
  {
    name: 'P/L, USD',
    reorder: true,
    sortable: true,
    minWidth: '175px',
    selector: (row) => row.pl,
  },
  {
    reorder: true,
    minWidth: '175px',
    selector: (row) => row.star,
  },
]
