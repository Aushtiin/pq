import React, { useState } from 'react'
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap'
import CheckoutSteps from './CheckoutSteps'
import Message from './Message'

const Approval2 = () => {
  const [cartValue, setCartValue] = useState(80500)
  const [downPayment, setDownPayment] = useState('')
  const [shoppingCredit, setShoppingCredit] = useState('')
  const [monthlyPayment, setMonthlyPayment] = useState('')
  const [tenure, setTenure] = useState('')
  const [error, setError] = useState('')

  const handlePaymentSummary = (e) => {
    e.preventDefault()
    const minimumDownPayment = cartValue * 0.3
    if (tenure === '') {
      setError('Please Choose a Plan')
      return
    } else if (!Number(downPayment)) {
      setError('Please enter a valid amount')
      return
    } else if (Number(downPayment) > cartValue) {
      setError('Down payment cannot be greater than cart total')
      return
    } else if (minimumDownPayment > Number(downPayment)) {
      setError(`Down Payment cannot be less than ₦${minimumDownPayment}`)
      return
    } else {
      const shoppingCredit = cartValue - Number(downPayment)
      setShoppingCredit(shoppingCredit.toString())
      const monthlyInterest = Number(shoppingCredit) * 0.04
      const totalInterest = Number(monthlyInterest) * Number(tenure)
      const monthlyPay = (Number(shoppingCredit) + Number(totalInterest)) / Number(tenure)
      setMonthlyPayment(monthlyPay.toString())
    }
  }
  return (
    <Container>
      <div className="topcontent">
        <div id="bckbtn">
          <a href="/">
            <i style={{ color: "#ff488b" }} className="fas fa-arrow-left"></i><span style={{ color: "#ff488b" }}> Back</span>
          </a>
        </div>
        <CheckoutSteps step1 />
      </div>
      <Row className='justify-content-md-center'>
        <Col md={10}>
          <h5 className='apq my-4'><b>Choose Your Plan</b></h5>
          <Row className='justify-content-md-center'>
            <Col className='mb-3'>
              <div className="monthbox text-center" tabIndex="1" onClick={() => setTenure(1)}>
                <div className="top"></div>
                <span className='chtxt stxt'>Aggresive</span>
                <span className='chtxt numtxt'><b>1</b></span>
                <span className='chtxt stxt'>month</span>
              </div>
            </Col>
            <Col className='mb-3'>
              <div className="monthbox text-center" tabIndex="2" onClick={() => setTenure(2)}>
                <div className="top top2"></div>
                <span className='chtxt stxt'>Stretching</span>
                <span className='chtxt numtxt'><b>2</b></span>
                <span className='chtxt stxt'>months</span>
              </div>
            </Col>
            <Col className='mb-3'>
              <div className="monthbox text-center" tabIndex="3" onClick={() => setTenure(3)}>
                <div className="top top3"></div>
                <span className='chtxt stxt'>Focused</span>
                <span className='chtxt numtxt'><b>3</b></span>
                <span className='chtxt stxt'>months</span>
              </div>
            </Col>
            <Col className='mb-3'>
              <div className="monthbox text-center" tabIndex="4" onClick={() => setTenure(4)}>
                <div className="top top4"></div>
                <span className='chtxt stxt'>Casual</span>
                <span className='chtxt numtxt'><b>4</b></span>
                <span className='chtxt stxt'>months</span>
              </div>
            </Col>
            <Col className='mb-3'>
              <div className="monthbox text-center" tabIndex="5" onClick={() => setTenure(5)}>
                <div className="top top5"></div>
                <span className='chtxt stxt'>Mild</span>
                <span className='chtxt numtxt'><b>5</b></span>
                <span className='chtxt stxt'>months</span>
              </div>
            </Col>
            <Col className='mb-3'>
              <div className="monthbox text-center" tabIndex="6" onClick={() => setTenure(6)}>
                <div className="top top6"></div>
                <span className='chtxt stxt'>Gentle</span>
                <span className='chtxt numtxt'><b>6</b></span>
                <span className='chtxt stxt'>months</span>
              </div>
            </Col>
          </Row>

          <div className='section2'>
            <h5 className='apq mb-4'><b>Payment Breakdown</b></h5>
            {error && <Message>{error}</Message>}
            <Row className='justify-content-md-center'>
              <Col className='paymentbreakdown' md={8}>
                <Row className='text-center'>
                  <Col md={6}>
                    <h5 className='bdtxt'>Shopping Credit</h5>
                  </Col>
                  <Col className='lbl' md={6}><span className='lbo'>{shoppingCredit && `₦${shoppingCredit}`}</span></Col>
                </Row>
                <Row className='text-center'>
                  <Col md={6}>
                    <h5 className='bdtxt'>Down Payment</h5>
                  </Col>
                  <Col className='lbl' md={6}><span className='lbo'>{downPayment && `₦${downPayment}`}</span></Col>
                </Row>
                <Row className='text-center'>
                  <Col md={6}>
                    <h5 className='bdtxt'>Monthly Installment</h5>
                  </Col>
                  <Col className='lbl' md={6}><span className='lbo'>{monthlyPayment && `₦${Number(monthlyPayment).toFixed()}`}</span></Col>
                </Row>
                <Row className='text-center'>
                  <Col md={6}>
                    <h5 className='bdtxt'>Tenure</h5>
                  </Col>
                  <Col className='lbl' md={6}><span className='lbo'>{tenure && `${tenure} ${Number(tenure) > 1 ? `months` : `month`}`}</span></Col>
                </Row>
              </Col>
              <Col className='customside paymentbreakdown' md={4}>
                <span className='dwntxt'>Customize Down Payment</span>

                <Form className='mt-2' onSubmit={handlePaymentSummary}>
                  <Form.Group>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend2">
                          <span id='naira2'>₦</span>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        className="formcontrol"
                        value={downPayment}
                        onChange={(e) => setDownPayment(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                  <div className="subbtn text-center">
                    <Button
                      style={{
                        border: "2px solid #ff97bd",
                        width: "100%",
                        borderRadius: "20px",
                      }}
                      type="submit"
                      variant='outline-success'
                    >
                      <span className='uptbtn'>Update Breakdown</span>
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>

          <div className="ctnbtn text-center ctbnt my-4">
            <Button
              style={{
                border: "2px solid #ff97bd",
                width: "35%",
                borderRadius: "20px",
              }}
              className='butn'
              type="submit"
              variant='outline-success butn'
            >
              <span className='ctn'><b>Continue</b></span>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Approval2
