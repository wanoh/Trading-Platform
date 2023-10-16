import { createSlice } from '@reduxjs/toolkit'

const InstrumentSlice = createSlice({
  name: 'Instruments',
  initialState: {
    activeInstrument: 'XAUUSD',
    selectedInstrument: ['EURUSD', 'GBPUSD', 'XAUUSD'],
  },
  reducers: {
    setActiveInstrument: (state, action) => {
      state.activeInstrument = action.payload
    },
    setSelectedInstruments: (state, action) => {
      const newInstrument = action.payload
      if (!state.selectedInstrument.includes(newInstrument)) {
        state.selectedInstrument = [...state.selectedInstrument, newInstrument]

        if (state.selectedInstrument.length > 4) {
          state.selectedInstrument.shift()
        }
      }
    },
    removeSelectedInstrument: (state, action) => {
      const instrumentToRemove = action.payload
      state.selectedInstrument = state.selectedInstrument.filter(
        (instrument) => instrument !== instrumentToRemove
      )

      if (state.activeInstrument === instrumentToRemove) {
        if (state.selectedInstrument.length > 0) {
          state.activeInstrument = state.selectedInstrument[0]
        } else {
          state.activeInstrument = null
        }
      }
    },
  },
})

export const {
  setActiveInstrument,
  setSelectedInstruments,
  removeSelectedInstrument,
} = InstrumentSlice.actions

export default InstrumentSlice.reducer
