import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav className='justify-content-center mb-3'>
            <Nav.Item className='step'>
                {!step1 ?
                    <Nav.Link disabled><span style={{ color: '#ff0360' }}><b>1</b></span></Nav.Link> :
                    step1 ? (
                        <LinkContainer to='/'>
                            <Nav.Link><b><i className="fa fa-check"></i></b></Nav.Link>
                        </LinkContainer>
                    ) : <Nav.Link disabled><b>1</b></Nav.Link>}
            </Nav.Item>

            <div className="progressbar"></div>

            <Nav.Item className='step'>
                {step1 ?
                    <Nav.Link disabled><span style={{ color: '#ff0360' }}><b>2</b></span></Nav.Link> :
                    step2 ? (
                        <LinkContainer to='/2'>
                            <Nav.Link><b><i className="fa fa-check"></i></b></Nav.Link>
                        </LinkContainer>
                    ) : <Nav.Link disabled><b>2</b></Nav.Link>}
            </Nav.Item>

            <Nav.Item className='step'>
                {step3 ? (
                    <LinkContainer to='/#'>
                        <Nav.Link><b><i className="fa fa-check"></i></b></Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled><b>3</b></Nav.Link>}
            </Nav.Item>

            <Nav.Item className='step'>
                {step4 ? (
                    <LinkContainer to='/#'>
                        <Nav.Link><b><i className="fa fa-check"></i></b></Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled><b>4</b></Nav.Link>}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
