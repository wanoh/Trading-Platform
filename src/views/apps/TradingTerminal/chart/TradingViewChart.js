import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

let tvScriptLoadingPromise

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef()
  const [widgetReady, setWidgetReady] = useState(false)

  const activeInstrument = useSelector(
    (state) => state.instrument.activeInstrument
  )

  useEffect(() => {
    onLoadScriptRef.current = createWidget

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script')
        script.id = 'tradingview-widget-loading-script'
        script.src = 'https://s3.tradingview.com/tv.js'
        script.type = 'text/javascript'
        script.onload = resolve

        document.head.appendChild(script)
      })
    }

    tvScriptLoadingPromise.then(() => {
      setWidgetReady(true)
      onLoadScriptRef.current && onLoadScriptRef.current()
    })

    return () => (onLoadScriptRef.current = null)

    function createWidget() {
      if (
        widgetReady &&
        document.getElementById('tradingview_6c538') &&
        'TradingView' in window
      ) {
        const widget = new window.TradingView.widget({
          width: '100%',
          height: '400px',
          symbol: activeInstrument,
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          enable_publishing: false,
          withdateranges: true,
          range: 'YTD',
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: 'tradingview_6c538',
        })

        widget.onChartReady(() => {})
      }
    }
  }, [activeInstrument, widgetReady])

  return (
    <div className='tradingview-widget-container' style={{ width: '100%' }}>
      <div id='tradingview_6c538' />
    </div>
  )
}
