import React, { useState } from 'react'
import { Container, Form, Button, Col, Row, Image, InputGroup } from 'react-bootstrap'
import Calendar from 'react-calendar';
import CheckoutSteps from './CheckoutSteps';

const Approval = ({history}) => {
  const [profession, setProfession] = useState('')
  const [monthlyPay, setMonthlyPay] = useState('')
  const [payDate, setPayDate] = useState('')
  const [existingLoan, setExistingLoan] = useState('')

  const handleSubmit = () => {
    history.push('/2')
  }
  return (
    <Container>
      <CheckoutSteps step1 />
      <Row className='justify-content-md-center'>
        <Col md={7} xs={12}>
          <h5 className='apq my-4'>What Do You Do?</h5>
          <Row>
            <Col xs={3} md={4}>
              <div className="options" tabIndex='1' onClick={() => setProfession('paid employement')}>
                <div className="mb-2 pg-img">
                  <Image fluid src='https://cdn.dribbble.com/users/1418633/screenshots/5307640/help-center_4x.png' />
                </div>
                <span className='imgtxt'>Paid Employment</span>
              </div>
            </Col>

            <Col xs={3} md={4}>
              <div className="options" tabIndex='2' onClick={() => setProfession('self employed/ freelance')}>
                <div className="mb-2 pg-img">
                  <Image
                    fluid
                    src='https://cdn.dribbble.com/users/1418633/screenshots/5280635/dropshipping-_4x.png'
                  />
                </div>
                <span className='imgtxt'>Self Employed/ Freelance</span>
              </div>
            </Col>

            <Col xs={3} md={4}>
              <div className="options" tabIndex='3' onClick={() => setProfession('coporate organization')}>
                <div className="mb-2 pg-img">
                  <Image
                    fluid
                    src='https://i.pinimg.com/originals/e4/92/26/e492264f31649f970f76c2688b7b6397.jpg'
                  />
                </div>
                <span className='imgtxt'>Coporate Organisation</span>
              </div>
            </Col>

          </Row>
        </Col>
      </Row>

      <Row className='justify-content-md-center mt-4'>
        <Col md={7} xs={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label><span className='mb-3 formlabel'>How much do you get paid monthly?</span></Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">
                    <span id='naira'>₦</span>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  className="formcontrol"
                  value={monthlyPay}
                  onChange={(e) => setMonthlyPay(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group>
              <Form.Label><span className='mb-3 formlabel'>When is your next salary date?</span></Form.Label>
              <Form.Control
                className="formcontrol"
                type="date"
                value={payDate}
                onChange={(e) => setPayDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label><span className='mb-3 formlabel'>Do you have any existing loan(s)?</span></Form.Label>
              <div className="loansexit formcontrol">
                <Row>
                  <Col md={6}>
                    <Form.Check
                      type='radio'
                      label='Yes'
                      id='existingLoans'
                      name='existingLoans'
                      value='Yes'
                      onChange={(e) => setExistingLoan(e.target.value)}
                    >
                    </Form.Check>
                  </Col>
                  <Col className='this' md={6}>
                    <Form.Check
                      type='radio'
                      label='No'
                      id='existingLoans'
                      name='existingLoans'
                      value='No'
                    onChange={(e) => setExistingLoan(e.target.value)}
                    >
                    </Form.Check>
                  </Col>
                </Row>
              </div>
            </Form.Group>
            <div className="ctnbtn text-center">
              <Button
                style={{
                  border: "2px solid #ff97bd",
                  width: "45%",
                  borderRadius: "20px",
                }}
                className='butn'
                type="submit"
                variant='outline-success butn'
              >
                <span className='ctn'><b>Continue</b></span>
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Approval
