import yup from 'yup'

// ** Split Email Func.
export function splitEmail(email) {
  const atIndex = email.indexOf('@') // Find the index of the @ symbol
  if (atIndex === -1) {
    // If no @ symbol is found, return null
    return null
  }
  const username = email.slice(0, atIndex) // Get the substring before the @ symbol
  const domain = email.slice(atIndex + 1) // Get the substring after the @ symbol
  return { username, domain } // Return an object containing the username and domain
}

// ** YUP Validation Schema
export const formSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email address')
    .required('Email is required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  addressOne: yup.string().required('Address is required'),
  addressTwo: yup.string(),
  // country: yup
  //   .object()
  //   .typeError('Select a country')
  //   .required('Country is required')
  //   .nullable(),
  state: yup.string().required('State is required'),
  city: yup.string().required('City is required'),
  // zipCode: yup
  //   .number()
  //   .typeError('Zip code must be a number')
  //   .required('Zip code number is required')
  //   .nullable(),
})

// ** Country Options for forms
export const countryOptions = [
  { label: 'Australia', value: 'Australia' },
  { label: 'Bangladesh', value: 'Bangladesh' },
  { label: 'Belarus', value: 'Belarus' },
  { label: 'Brazil', value: 'Brazil' },
  { label: 'Canada', value: 'Canada' },
  { label: 'China', value: 'China' },
  { label: 'France', value: 'France' },
  { label: 'Germany', value: 'Germany' },
  { label: 'India', value: 'India' },
  { label: 'Indonesia', value: 'Indonesia' },
  { label: 'Israel', value: 'Israel' },
  { label: 'Italy', value: 'Italy' },
  { label: 'Japan', value: 'Japan' },
  { label: 'Korea', value: 'Korea' },
  { label: 'Mexico', value: 'Mexico' },
  { label: 'Philippines', value: 'Philippines' },
  { label: 'Russia', value: 'Russia' },
  { label: 'South', value: 'South' },
  { label: 'Thailand', value: 'Thailand' },
  { label: 'Turkey', value: 'Turkey' },
  { label: 'Ukraine', value: 'Ukraine' },
  { label: 'United Arab Emirates', value: 'United Arab Emirates' },
  { label: 'United Kingdom', value: 'United Kingdom' },
  { label: 'United States', value: 'United States' },
]

// ** Initial Balance value for users
export const initBalance = {
  totalBalance: '00.00',
  cryptoBalance: '00.00',
  forexBalance: '00.00',
  cfdBalance: '00.00',
  stocksBalance: '00.00',
}

// ** Initial Transactions Values for users
export const transactionsData = {
  deposits: [],
  withdrawals: [],
}
export const incomingData = [{ data: null }]
