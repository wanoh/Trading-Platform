// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { selectThemeColors } from '@utils'
import { splitEmail } from '../../../../utility/HelperFunc'
import { formSchema } from '../../../../utility/HelperFunc'

// ** Third Party Components
import Select from 'react-select'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { v4 as uuidv4 } from 'uuid'

// ** Reactstrap Imports
import { Button, Label, FormText, Form, Input, Row, Spinner } from 'reactstrap'

// ** Toast
import toast from 'react-hot-toast'
const ToastContent = ({ msg }) => {
  return (
    <div className='d-flex'>
      <span>{msg}</span>
    </div>
  )
}

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../../../configs/firebase'
import { doc, setDoc } from 'firebase/firestore'

// ** Initial Users Data Values
import { initBalance } from '../../../../utility/HelperFunc'
import { transactionsData } from '../../../../utility/HelperFunc'
import { incomingData } from '../../../../utility/HelperFunc'

// ** Country Options for form
import { countryOptions } from '../../../../utility/HelperFunc'

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  addressOne: '',
  addressTwo: '',
  state: '',
}

const checkIsValid = (data) => {
  return Object.values(data).every((field) =>
    typeof field === 'object' ? field !== null : field.length > 0
  )
}

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(false)

  // ** Random uuid password with dashes
  const uuid = uuidv4()

  // ** Default password without dashes
  const defaultPasswordValue = `${uuid.slice(0, 10)}Ra@23`
  const defaultPassword = true

  // ** User role
  const role = 'client'

  // ** User created by
  const createdBy = 'admin'

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const {
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(formSchema),
  })

  // ** handle register function, takes in the firebase user obj and the input form data
  const handleRegisterUser = async ({ firebaseUser, data }) => {
    console.log('firebaseUser', firebaseUser, 'Data', data)
    // ** User Info from firebase
    const { email: authEmail, uid: userId, photoURL } = firebaseUser
    const { accessToken, refreshToken } = firebaseUser.stsTokenManager

    // ** Split email to get username
    const { username } = splitEmail(authEmail)

    // ** Temp role
    const tempRole = [{ action: 'manage', subject: 'all' }]

    // ** Form Input values
    const {
      firstName,
      lastName,
      addressOne,
      addressTwo,
      country,
      state,
      city,
      zipCode,
    } = data

    // ** Required User Data
    const userData = {
      ability: tempRole,
      email: authEmail,
      id: userId,
      accessToken,
      refreshToken,
      role,
      avatar: photoURL,
      username,
      firstName,
      lastName,
      addressOne,
      addressTwo,
      country,
      state,
      city,
      zipCode,
      createdBy,
      password: [{ defaultPassword, defaultPasswordValue }],
    }

    console.log('User Data', userData)

    // ** Save User Data to Firestore
    await setDoc(doc(db, 'users', userId), userData)
    await setDoc(doc(db, 'amount', userId), initBalance)
    await setDoc(doc(db, 'transactions', userId), transactionsData)
    await setDoc(doc(db, 'incoming', userId), { incomingData })
  }

  // ** Function to handle form submit
  const onSubmit = async (data) => {
    setData(data)
    setPending(true)
    try {
      if (checkIsValid(data)) {
        const { email } = data

        const userCrednetials = await createUserWithEmailAndPassword(
          auth,
          email,
          defaultPasswordValue
        )

        // ** User Object returned from Firebase
        const firebaseUser = userCrednetials.user

        const user = {
          firebaseUser,
          data,
        }

        handleRegisterUser(user)
        setPending(false)
        toggleSidebar()
        toast.success((t) => (
          <ToastContent msg={'Client Account created successfully!'} />
        ))
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
        setPending(false)
      }
    } catch (error) {
      console.log(error)
      setPending(false)
      toggleSidebar()
      toast.error((t) => (
        <ToastContent msg={'Error creating Client Account!'} />
      ))
    }
  }

  const handleSidebarClosed = () => {
    for (const key in defaultValues) {
      setValue(key, '')
    }
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New User'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
      onClosed={handleSidebarClosed}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-1'>
          <Label className='form-label' for='firstName'>
            First Name <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='firstName'
            control={control}
            render={({ field }) => (
              <Input
                disabled={pending}
                id='firstName'
                placeholder='John'
                invalid={!!errors.firstName} // Simplified error check
                {...field}
              />
            )}
          />
          {errors.firstName && (
            <span className='text-danger'>{errors.firstName.message}</span>
          )}
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='lastName'>
            Last Name <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='lastName'
            control={control}
            render={({ field }) => (
              <Input
                disabled={pending}
                id='lastName'
                placeholder='Doe'
                invalid={errors.lastName && true}
                {...field}
              />
            )}
          />
          {errors.lastName && (
            <span className='text-danger'>{errors.lastName.message}</span>
          )}
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='userEmail'>
            Email <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <Input
                disabled={pending}
                type='email'
                id='userEmail'
                placeholder='john.doe@example.com'
                invalid={errors.email && true}
                {...field}
              />
            )}
          />
          {errors.email && (
            <span className='text-danger'>{errors.email.message}</span>
          )}
        </div>

        <div className='mb-1'>
          <Label className='form-label' for='addressOne'>
            Address Line 1 <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='addressOne'
            control={control}
            render={({ field }) => (
              <Input
                disabled={pending}
                id='addressOne'
                placeholder='12, Business'
                invalid={errors.addressOne && true}
                {...field}
              />
            )}
          />
          {errors.addressOne && (
            <span className='text-danger'>{errors.addressOne.message}</span>
          )}
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='addressTwo'>
            Address Line 2
          </Label>
          <Controller
            name='addressTwo'
            control={control}
            render={({ field }) => (
              <Input
                disabled={pending}
                id='addressTwo'
                placeholder='Mall Road'
                invalid={errors.addressTwo && true}
                {...field}
              />
            )}
          />
          {errors.addressTwo && (
            <span className='text-danger'>{errors.addressTwo.message}</span>
          )}
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='country'>
            Country <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='country'
            control={control}
            render={({ field }) => (
              <Select
                isClearable={false}
                classNamePrefix='select'
                options={countryOptions}
                theme={selectThemeColors}
                className={classnames('react-select', {
                  'is-invalid': data !== null && data.country === null,
                })}
                {...field}
              />
            )}
          />
          {errors.country && (
            <span className='text-danger'>{errors.country.message}</span>
          )}
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='state'>
            State <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='state'
            control={control}
            render={({ field }) => (
              <Input
                disabled={pending}
                id='state'
                placeholder='Greater Accra'
                invalid={errors.state && true}
                {...field}
              />
            )}
          />
          {errors.state && (
            <span className='text-danger'>{errors.state.message}</span>
          )}
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='city'>
            City <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='city'
            control={control}
            render={({ field }) => (
              <Input
                disabled={pending}
                id='city'
                placeholder='00233'
                invalid={errors.city && true}
                {...field}
              />
            )}
          />
          {errors.city && (
            <span className='text-danger'>{errors.city.message}</span>
          )}
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='zipCode'>
            Zip <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='zipCode'
            control={control}
            render={({ field }) => (
              <Input
                disabled={pending}
                id='zipCode'
                placeholder='00233'
                invalid={errors.zipCode && true}
                {...field}
              />
            )}
          />
          {errors.zipCode && (
            <span className='text-danger'>{errors.zipCode.message}</span>
          )}
        </div>
        <Button
          type='submit'
          className='me-1'
          color='primary'
          disabled={pending}
        >
          {pending && <Spinner className='me-1' color='light' size='sm' />}
          <span>Submit</span>
        </Button>
        <Button
          type='reset'
          color='secondary'
          outline
          onClick={toggleSidebar}
          disabled={pending}
        >
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
