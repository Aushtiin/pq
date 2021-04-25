import React from 'react'
import { Col, Container, Image, Row, } from 'react-bootstrap'

const Cart = () => {
  return (
    <>
      <Row>
        <Col className='half' md={6}>
          <div id="linkback">
            <a href="/"><i style={{ color: "white" }} className="fas fa-arrow-left"></i> Back To Store</a>
          </div>

          <div className="logo">
            <Image
              fluid
              src='https://betajob.com.ng/storage/files/ng/1934/thumb-320x240-ba414a77029ba5e3225ab8a7d6090d46.jpg'
            />
          </div>

          <div className="bottomtext">
            <ul id='bottomul'>
              <li><span>Get pre-approved instantly.</span></li>
              <li><span>Spread payment for up to 6 months.</span></li>
              <li><span>Provide some basic information to get started.</span></li>
            </ul>
          </div>
        </Col>

        <Col className='half2' md={6}>
          <>
            <div className="cart-sec">
              <small id="ordertext">ORDER SUMMARY</small>
              <Row className="mx-auto cart-card move">
                <Col className='my-4'>
                  <div className="cart-item">
                    <Row>
                      <Col md={4}>
                        <div className="image">
                          <Image
                            style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", padding: "0px", height: "80px", borderRadius: "5px" }}
                            fluid
                            src="https://i2.wp.com/mobilityarena.com/wp-content/uploads/2020/11/Meeysoo-P45-Pro.jpg"
                          />
                        </div>
                      </Col>
                      <Col className=" text-muted text mt-1" md={8}>
                        <span className='lh-1'>Meeysoo P43 Pro</span>
                        <span className='lh-1'>₦ 40,250</span>
                        <span className='lh-1'>Qty: 2</span>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row className="move total mx-auto">
                <Col>
                  <span className="text-muted txt">Total Cart Value:</span>
                </Col>
                <Col>
                  <strong className="price float-right">₦ 80,500</strong>
                </Col>
              </Row>
            </div>
          </>
        </Col>
      </Row>
    </>
  )
}

export default Cart
