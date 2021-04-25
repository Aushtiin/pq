import Cart from './components/Cart';
import { Row, Col } from 'react-bootstrap'
import Approval from './components/Approval';
import Approval2 from './components/Approval2';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Row>
        <Col md={6}>
          <Cart />
        </Col>
        <Col md={6}>
          <Switch>
          <Route exact path='/' component={Approval} />
          <Route exact path='/2' component={Approval2} />
          </Switch>
        </Col>
      </Row>
    </Router>
  );
}

export default App;
