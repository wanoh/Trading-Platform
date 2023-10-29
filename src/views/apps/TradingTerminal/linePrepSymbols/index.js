import React, { useEffect, useState } from 'react'

const MyComponent = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const apiKey = '4gJyYudlalNuoLCwIhZ1PiJD44XDwJop' // Replace with your actual API key
    const apiUrl =
      'https://financialmodelingprep.com/api/v3/symbol/available-forex-currency-pairs'

    fetch(apiUrl, {
      headers: {
        'X-API-KEY': apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((responseData) => {
        setData(responseData)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <div>
      <h1>API Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default MyComponent
