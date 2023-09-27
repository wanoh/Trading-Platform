// ** React Import
import { useEffect, useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Third Party Components
import Select from 'react-select'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Button, Label, Form, Input } from 'reactstrap'

// ** Store & Actions
import { addUser } from '../../store'
import { useDispatch } from 'react-redux'

const defaultValues = {
  email: '',
  contact: '',
  company: '',
  reason: '',
  status: null,
}

const statusOptions = [
  { label: 'Select...', value: '' },
  { label: 'Initiated', value: 'Initiated' },
  { label: 'Processing', value: 'Processing' },
  { label: 'Litigated', value: 'Litigated' },
  { label: 'Completed', value: 'Completed' },
]

const marketOptions = [
  { label: 'Select...', value: '' },
  { label: 'Forex', value: 'Forex' },
  { label: 'Stocks', value: 'Stocks' },
  { label: 'CDFs', value: 'CDFs' },
  { label: 'Crypto Currency', value: 'Crypto Currency' },
]

const checkIsValid = (data) => {
  return Object.values(data).every((field) =>
    typeof field === 'object' ? field !== null : field.length > 0
  )
}

const SidebarEditTransaction = ({ open, toggleSidebar, selectedRowData }) => {
  // ** Default Values from the selected row
  useEffect(() => {
    if (selectedRowData) {
      setValue('company', selectedRowData.company || '')
      setValue('reason', selectedRowData.reason || '')
      setValue('amount', selectedRowData.depositAmount || '')
      setValue(
        'market',
        selectedRowData.market
          ? { label: selectedRowData.market, value: selectedRowData.market }
          : { label: 'Select...', value: '' }
      )
      setValue(
        'status',
        selectedRowData.progressStatus
          ? {
              label: selectedRowData.progressStatus,
              value: selectedRowData.progressStatus,
            }
          : { label: 'Select...', value: '' }
      )
    }
  }, [selectedRowData])
  // ** States
  const [data, setData] = useState(null)

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const {
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues })

  // ** Function to handle form submit
  const onSubmit = (data) => {
    setData(data)
    if (checkIsValid(data)) {
      toggleSidebar()
      dispatch(
        addUser({
          email: data.email,
          company: data.company,
          contact: data.contact,
          reason: data.reason,
          status: data.status.value,
        })
      )
    } else {
      for (const key in data) {
        if (data[key] === null) {
          setError('status', {
            type: 'manual',
          })
        }
        if (data[key] !== null && data[key].length === 0) {
          setError(key, {
            type: 'manual',
          })
        }
      }
    }
  }

  const handleSidebarClosed = () => {
    for (const key in defaultValues) {
      setValue(key, '')
    }
  }
  console.log('selectedRowData', selectedRowData)
  return (
    <Sidebar
      size='lg'
      open={open}
      title='Edit Transaction'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
      onClosed={handleSidebarClosed}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-1'>
          <Label className='form-label' for='company'>
            Company <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='company'
            control={control}
            render={({ field }) => (
              <Input id='company' invalid={errors.company && true} {...field} />
            )}
          />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='reason'>
            Reason <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='reason'
            control={control}
            render={({ field }) => (
              <Input
                type='text'
                id='reason'
                invalid={errors.reason && true}
                {...field}
              />
            )}
          />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='amount'>
            Amount <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='amount'
            control={control}
            render={({ field }) => (
              <Input
                type='text'
                id='amount'
                invalid={errors.amount && true}
                {...field}
              />
            )}
          />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='market'>
            Market <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='market'
            control={control}
            render={({ field }) => (
              <Select
                isClearable={false}
                classNamePrefix='select'
                options={marketOptions}
                theme={selectThemeColors}
                className={classnames('react-select', {
                  'is-invalid': data !== null && data.status === null,
                })}
                {...field}
              />
            )}
          />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='status'>
            Status <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='status'
            control={control}
            render={({ field }) => (
              <Select
                isClearable={false}
                classNamePrefix='select'
                options={statusOptions}
                theme={selectThemeColors}
                className={classnames('react-select', {
                  'is-invalid': data !== null && data.status === null,
                })}
                {...field}
              />
            )}
          />
        </div>
        <Button type='submit' className='me-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarEditTransaction
