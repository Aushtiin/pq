import Cart from './components/Cart';
import { Row, Col, Container } from 'react-bootstrap'
import Approval from './components/Approval';
import Approval2 from './components/Approval2';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Container fluid>
      <Row className='maincontent'>
        <Col md={6}>
          <Cart />
        </Col>
        <Col md={6} className='content6'>
          <Switch>
          <Route exact path='/' component={Approval} />
          <Route exact path='/2' component={Approval2} />
          </Switch>
        </Col>
      </Row>
      </Container>
    </Router>
  );
}

export default App;
