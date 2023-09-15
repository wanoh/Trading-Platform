// ** React Import
import { useState } from 'react'

// ** Custom Components

// ** Icons Import
import { BsFillSaveFill } from 'react-icons/bs'

// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import {
  Card,
  Form,
  CardBody,
  Button,
  Input,
  Label,
  CardHeader,
  CardTitle,
} from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'

const defaultValues = {
  currency: 'USD',
  currencyRate: 12,
}

const checkIsValid = (data) => {
  return Object.values(data).every((field) =>
    typeof field === 'object' ? field !== null : field.length > 0
  )
}

const LeadActivitySettings = () => {
  // ** States
  const [data, setData] = useState(null)

  // ** Store Vars
  const dispatch = useDispatch()

  const callStatusOptions = [
    { value: 'NoAnswer', label: 'No Answer' },
    { value: 'FirstAnswer', label: 'Answer on first ring' },
    { value: 'SecondAnswer', label: 'Answer on second ring' },
    { value: 'NumberBusy', label: 'Number Busy' },
    { value: 'OutOfReach', label: 'Out Of Reach' },
    { value: 'PickAndEnd', label: 'Pick up and ended the call' },
  ]
  const leadStatusOptions = [
    { value: 'NoInterested', label: 'No Interested' },
    { value: 'moreInfo', label: 'Need More Information' },
    { value: 'noIdeaInterested', label: 'Has no idea and interested' },
    { value: 'noIdeaUninterested', label: 'Has no idea and not interested' },
  ]
  const leadClosingStatusOptions = [
    { value: 'ftd1', label: 'FTD x1 - Retention x1' },
    { value: 'ftdx2', label: 'FTD x2 - Retention x2' },
  ]

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
        editCurrency({
          currency: data.currency,
          currencyRate: data.currencyRate,
        })
      )
    } else {
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Lead Activity</CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-2'>
              <Label className='form-label' for='callStatus'>
                Last Call Status <span className='text-danger'>*</span>
              </Label>
              <Select
                id='callStatus'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={callStatusOptions}
                theme={selectThemeColors}
                defaultValue={callStatusOptions[0]}
              />
            </div>
            <div className='mb-2'>
              <Label className='form-label' for='leadStatus'>
                Lead Status <span className='text-danger'>*</span>
              </Label>
              <Select
                id='leadStatus'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={leadStatusOptions}
                theme={selectThemeColors}
                defaultValue={leadStatusOptions[0]}
              />
            </div>
            <div className='mb-3'>
              <Label className='form-label' for='leadClosingStatus'>
                Lead Closing Status <span className='text-danger'>*</span>
              </Label>
              <Select
                id='leadClosingStatus'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={leadClosingStatusOptions}
                theme={selectThemeColors}
                defaultValue={leadClosingStatusOptions[0]}
              />
            </div>

            <Button type='submit' className='w-100' color='primary'>
              <BsFillSaveFill size={16} className='me-1' />
              Save
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  )
}

export default LeadActivitySettings
