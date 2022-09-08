import React, { Component } from "react";
import {Nav,
        Navbar,
        Container, 
        Offcanvas,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';


import './NavigationBar.css'


class NavigationBar extends Component {
  constructor(props) {
    super(props);
    ///this.state = {date: new Date()};  
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

    return(
      <>
        {['md'].map((expand) => (
          <Navbar collapseOnSelect key={expand}  expand={expand} className="mb-3 bg-primary " variant="dark" >
            <Container fluid>
              <Navbar.Brand href="#">
                <img  className="img-responsive" src="/images/icons/logo.png"  alt="Le Moniteur" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /> 
              
              <Navbar.Offcanvas
                
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton >
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Le Moniteur En Ligne
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="bg-transparent">
                  <Nav className="justify-content-end flex-grow-1 pe-3 nav-bar nav">
                                        
                    <Nav.Link as={Link} to="/"  href="#/" className="">
                      <i className="fas fa-home"></i>
                      Acceuil
                    </Nav.Link>

                    <Nav.Link as={Link} to="/formations"  href="#/formations" className="">
                      <i className="fas fa-university"></i>
                      Formations
                    </Nav.Link>

                    <Nav.Link href="#action3" className="">
                      <i className="fas fa-graduation-cap"></i>
                      Examens
                    </Nav.Link>

                    <Nav.Link href="#action4" className="">
                      <i className="fab fa-brands fa-blogger-b"></i>
                      Forums
                    </Nav.Link>
                   
                   {/* 
                    <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      
                    >
                      <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  */}

                  </Nav>

                  {/* 
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>

                  */}
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
}

export default NavigationBar;
