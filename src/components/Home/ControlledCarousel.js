import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

import {Button, ButtonGroup} from 'react-bootstrap';

import 'holderjs';

import './Home.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <React.Fragment>
    <Carousel activeIndex={index} onSelect={handleSelect}  className="text-white">
      <Carousel.Item>
        <img
          className="d-block w-100"
          data-src="holder.js/800x650?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         <>
            <Button variant="primary" size="lg" active>
              Primary button
            </Button>{' '}
            <Button variant="secondary" size="lg" active>
              Button
            </Button>
          </>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x650?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <>
            <Button variant="primary" size="lg" active>
              Primary button
            </Button>{' '}
            <Button variant="secondary" size="lg" active>
              Button
            </Button>
          </>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x650?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>

          <>
            <Button variant="primary" size="lg" active>
              Primary button
            </Button>{' '}
            <Button variant="secondary" size="lg" active>
              Button
            </Button>
          </>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </React.Fragment>
  );
}

export default ControlledCarousel;
