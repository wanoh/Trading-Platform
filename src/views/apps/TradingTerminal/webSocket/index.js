import React, { useEffect, useState } from 'react'

const WebSocketComponent = () => {
  const [messages, setMessages] = useState([])
  const socket = new WebSocket(
    'wss://ws.finnhub.io?token=cknrm1hr01qrbal9gmrgcknrm1hr01qrbal9gms0'
  )
  console.log('Symbols', messages)
  useEffect(() => {
    // Connection opened -> Subscribe
    socket.addEventListener('open', function (event) {
      socket.send(JSON.stringify({ type: 'subscribe', symbol: 'AAPL' }))
      socket.send(
        JSON.stringify({ type: 'subscribe', symbol: 'BINANCE:BTCUSDT' })
      )
      socket.send(JSON.stringify({ type: 'subscribe', symbol: 'IC MARKETS:1' }))
    })

    // Listen for messages
    socket.addEventListener('message', function (event) {
      const message = JSON.parse(event.data)
      setMessages((prevMessages) => [...prevMessages, message])
    })

    // Unsubscribe (example)
    const unsubscribe = (symbol) => {
      socket.send(JSON.stringify({ type: 'unsubscribe', symbol: symbol }))
    }

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.close()
    }
  }, [])

  return (
    <div>
      <h1>WebSocket Messages</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{JSON.stringify(message)}</li>
        ))}
      </ul>
    </div>
  )
}

export default WebSocketComponent
