import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Users,Home,Aboute} from './pages/index';
function App() {
  return (
    <div className="App">
            <Navbar bg="primary" variant="dark">
                <Container>
                  <Navbar.Brand href="#home"><Link to='/'> Home </Link></Navbar.Brand>
                  <Nav className="me-auto">
                  <Link to='/'>  <Nav.Link href="#home">Home </Nav.Link></Link>
                  <Link to='/aboute'>  <Nav.Link href="#features">Aboute  </Nav.Link> </Link>
                  <Link to='/users'> <Nav.Link href="#pricing">Users  </Nav.Link> </Link>
                  </Nav>
                </Container>
          </Navbar>
              <Routes>
                  <Route path='/aboute' element={<Aboute/>} />
                  <Route path='/users' element={<Users />} />
                  <Route path='/' element={<Home />} />
            </Routes>
     
     
    </div>
  );
}

export default App;
