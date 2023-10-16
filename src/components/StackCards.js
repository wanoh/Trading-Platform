import React, { useState } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeSelectedInstrument,
  setActiveInstrument,
  setSelectedInstruments,
} from '../views/apps/TradingTerminal/store'

const StackedCardGroup = ({ maxCardWidth }) => {
  const dispatch = useDispatch()
  const stackedCards = useSelector(
    (state) => state.instrument.selectedInstrument
  )
  const activeInstrument = useSelector(
    (state) => state.instrument.activeInstrument
  )

  console.log('stackedCards', stackedCards)
  const addCard = (card) => {
    setSelectedInstruments(card)
  }

  const deleteCard = (card) => {
    dispatch(removeSelectedInstrument(card))
  }

  return (
    <>
      <div className='d-flex'>
        <div className='stacked-card-group'>
          {stackedCards?.map((card, index) => (
            <div
              key={index}
              className={
                activeInstrument === card
                  ? 'stacked-card active-card'
                  : 'stacked-card'
              }
              style={{ height: '80px' }}
              onClick={() => dispatch(setActiveInstrument(card))}
            >
              {stackedCards?.length > 1 && (
                <MdClose
                  className='position-absolute top-0 '
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteCard(card)
                  }}
                />
              )}
              <span className=''>{card}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => addCard('New Card')}
          className='p-1 border-0'
          style={{ width: '80px' }}
        >
          <MdAdd size={20} />
        </button>
      </div>
    </>
  )
}

export default StackedCardGroup
