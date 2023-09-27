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
import { Button, Label, FormText, Form, Input } from 'reactstrap'

// ** Store & Actions
import { addUser } from '../../store'
import { useDispatch } from 'react-redux'

const defaultValues = {
  email: '',
  contact: '',
  company: '',
  fullName: '',
  username: '',
  country: null,
}

const statusOptions = [
  { label: 'Select...', value: '' },
  { label: 'New', value: 'New' },
  { label: 'Approved', value: 'Approved' },
  { label: 'Declined', value: 'Declined' },
]

const typeOptions = [
  { label: 'Select...', value: '' },
  { label: 'Bank', value: 'Bank' },
  { label: 'Paypal', value: 'Paypal' },
  { label: 'Credit', value: 'Credit' },
  { label: 'Crypto Currency', value: 'Crypto Currency' },
]

const checkIsValid = (data) => {
  return Object.values(data).every((field) =>
    typeof field === 'object' ? field !== null : field.length > 0
  )
}

const EditSelectedTransaction = ({ open, toggleSidebar, selectedRowData }) => {
  // ** Default Values from the selected row
  useEffect(() => {
    if (selectedRowData) {
      setValue('amount', selectedRowData.depositAmount || '')
      setValue(
        'type',
        selectedRowData.type
          ? { label: selectedRowData.type, value: selectedRowData.type }
          : { label: 'Select...', value: '' }
      )
      setValue(
        'status',
        selectedRowData.transactionStatus
          ? {
              label: selectedRowData.transactionStatus,
              value: selectedRowData.transactionStatus,
            }
          : { label: 'Select...', value: '' }
      )
    }
  }, [selectedRowData])
  // ** States
  const [data, setData] = useState(null)
  const [plan, setPlan] = useState('basic')
  const [role, setRole] = useState('subscriber')

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
          role,
          avatar: '',
          status: 'active',
          email: data.email,
          currentPlan: plan,
          billing: 'auto debit',
          company: data.company,
          contact: data.contact,
          fullName: data.fullName,
          username: data.username,
          country: data.country.value,
        })
      )
    } else {
      for (const key in data) {
        if (data[key] === null) {
          setError('country', {
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
    setRole('subscriber')
    setPlan('basic')
  }

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
          <Label className='form-label' for='type'>
            Type <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='type'
            control={control}
            render={({ field }) => (
              <Select
                isClearable={false}
                classNamePrefix='select'
                options={typeOptions}
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
          <Label className='form-label' for='amount'>
            Amount <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='amount'
            control={control}
            render={({ field }) => (
              <Input
                type='amount'
                id='amount'
                placeholder='eg. 10,000.00'
                invalid={errors.amount && true}
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

export default EditSelectedTransaction
