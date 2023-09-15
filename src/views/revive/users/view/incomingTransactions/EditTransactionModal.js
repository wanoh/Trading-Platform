import React from 'react'
import { Controller } from 'react-hook-form'
import {
  Col,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'reactstrap'

const EditTransactionModal = ({ show, setShow }) => {
  // ** State

  return (
    <div>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className='modal-dialog-centered modal-lg'
      >
        <ModalHeader
          className='bg-transparent'
          toggle={() => setShow(!show)}
        ></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>Edit User Information</h1>
            <p>Updating user details will receive a privacy audit.</p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='gy-1 pt-75'>
              <Col md={6} xs={12}>
                <Label className='form-label' for='firstName'>
                  First Name
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='firstName'
                  name='firstName'
                  render={({ field }) => (
                    <Input
                      {...field}
                      id='firstName'
                      placeholder='John'
                      invalid={errors.firstName && true}
                    />
                  )}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='lastName'>
                  Last Name
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='lastName'
                  name='lastName'
                  render={({ field }) => (
                    <Input
                      {...field}
                      id='lastName'
                      placeholder='Doe'
                      invalid={errors.lastName && true}
                    />
                  )}
                />
              </Col>
              <Col xs={12}>
                <Label className='form-label' for='email'>
                  Email
                </Label>
                <Input
                  type='email'
                  id='email'
                  defaultValue={selectedUser.email}
                  placeholder='example@domain.com'
                />
              </Col>
              <Col xs={12}>
                <Label className='form-label' for='address'>
                  Address Line 1
                </Label>
                <Input
                  type='address'
                  id='address'
                  defaultValue={selectedUser.addressLineOne}
                />
              </Col>
              <Col xs={12}>
                <Label className='form-label' for='addressTwo'>
                  Address Line 2
                </Label>
                <Input
                  type='addressTwo'
                  id='addressTwo'
                  defaultValue={selectedUser.addressLineTwo}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='state'>
                  State
                </Label>
                <Input id='state' defaultValue={selectedUser.state} />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='zip'>
                  Zip
                </Label>
                <Input id='zip' defaultValue={selectedUser.zipCode} />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='city'>
                  City
                </Label>
                <Input id='city' defaultValue={selectedUser.city} />
              </Col>
              <Col xs={12} className='text-center mt-2 pt-50'>
                <Button type='submit' className='w-100' color='primary'>
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default EditTransactionModal
