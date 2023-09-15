import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  Row,
} from 'reactstrap'

const Preview = ({ title, data, doc }) => {
  return (
    <>
      <Card>
        <h4>Proof Of {title ? title : 'Card'}</h4>
        <CardText>{doc ? doc : 'Card'}</CardText>
        <CardBody>
          {data.map((button) => (
            <Row>
              <Col xl='8' xs='12'>
                <div>
                  <img src={button.img} alt='' />
                </div>
              </Col>
              <Col xl='4' xs='12'>
                <Button key={button.id}>{button.btnText}</Button>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </>
  )
}

export default Preview
