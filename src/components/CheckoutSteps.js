import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav className='justify-content-center mb-3'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/'>
                        <Nav.Link>
                        <i class="fa fa-check"></i>
                        </Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled>1</Nav.Link>}
            </Nav.Item>
            <span><hr /></span>
            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/2'>
                        <Nav.Link><i class="fa fa-check"></i></Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled>2</Nav.Link>}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/#'>
                        <Nav.Link><i class="fa fa-check"></i></Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled>3</Nav.Link>}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/#'>
                        <Nav.Link><i class="fa fa-check"></i></Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled>4</Nav.Link>}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
