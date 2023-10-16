// ** React Imports
import { useState } from 'react'

// ** Table Columns
import { reOrderColumns } from './tableData'

// ** Third Party Components
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'

const InstrumentsTable = () => {
  return (
    <Card className='overflow-hidden'>
      <CardBody>
        <div className='react-dataTable'>
          <DataTable
            noHeader
            data={[
              { symbol: 'EURUSD' },
              { symbol: 'XAUUSD' },
              { symbol: 'AUDUSD' },
              { symbol: 'GBPUSD' },
              { symbol: 'USDGHS' },
              { symbol: 'EURGHS' },
            ]}
            columns={reOrderColumns}
            className='react-dataTable'
            sortIcon={<ChevronDown size={10} />}
          />
        </div>
      </CardBody>
    </Card>
  )
}

export default InstrumentsTable
