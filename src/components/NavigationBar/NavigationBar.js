import React, { Component } from "react";
import {Nav,
        Navbar,
        Container, 
        Offcanvas,
        NavDropdown,
        Form,
        FormControl,
        Button,
} from 'react-bootstrap';

//import logo from '/images/icons/logo.png';

class NavigatonBar extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};  
  }

/*
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );  
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
*/
  render() {
    

    /*
    return (
      <>
        <Navbar collapseOnSelect fixed='top' bg='dark' expand='sm' variant='dark'>
          <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <Nav.Link href='/'> Home </Nav.Link>

                <Nav.Link href='/events'> Events </Nav.Link>

                <Nav.Link href='/blogs'> Blogs </Nav.Link>

                 <Nav.Link href='/about'> About </Nav.Link>


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
    */

    return(
      <>
        {['md'].map((expand) => (
          <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#">
                <img width="70px" height="auto" className="img-responsive" src="/images/icons/logo.png"  alt="Le Moniteur" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
}

export default NavigatonBar;
