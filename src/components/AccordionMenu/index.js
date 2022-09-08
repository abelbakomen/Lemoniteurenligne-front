import React, { Component } from "react";

import { Accordion, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import "./AccordionMenu.css";

class AccordionMenu extends Component {

    render() {

        return (

            <React.Fragment>

                <div>

                   <Accordion defaultActiveKey="2">
					  <Accordion.Item eventKey="1">
					    <Accordion.Header>Chapitre 1</Accordion.Header>
					    <Accordion.Body>
					      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					      
					    </Accordion.Body>
					  </Accordion.Item>
					  <Accordion.Item eventKey="2">
					    <Accordion.Header>Chapitre 2</Accordion.Header>
					    <Accordion.Body>
					      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					      
					    </Accordion.Body>
					  </Accordion.Item>

					  <Accordion.Item eventKey="3">
					    <Accordion.Header>Chapitre 3</Accordion.Header>
					    <Accordion.Body>
					      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					      
					    </Accordion.Body>
					  </Accordion.Item>
					  <Accordion.Item eventKey="4">
					    <Accordion.Header>Chapitre 4</Accordion.Header>
					    <Accordion.Body>
					      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					      
					    </Accordion.Body>
					  </Accordion.Item>

					  <Accordion.Item eventKey="5">
					    <Accordion.Header>Chapitre 5</Accordion.Header>
					    <Accordion.Body>
					      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					      
					    </Accordion.Body>
					  </Accordion.Item>
					  <Accordion.Item eventKey="6">
					    <Accordion.Header>Chapitre 6</Accordion.Header>
					    <Accordion.Body>
					      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					      
					    </Accordion.Body>
					  </Accordion.Item>
					</Accordion> 

               </div>

            </React.Fragment>

        );

    }

}


export default AccordionMenu;