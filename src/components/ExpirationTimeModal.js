import React from 'react'

const ExpirationTimeModal = ({ show, setShow, time }) => {
  return (
    <div className='vertically-centered-modal'>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className='modal-dialog-centered'
      >
        <ModalHeader toggle={() => setShow(!show)}>Revive Assets</ModalHeader>
        <ModalBody>Page expires in {time}</ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => setShow(!show)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ExpirationTimeModal
