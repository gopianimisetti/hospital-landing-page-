import Carousel from 'react-bootstrap/Carousel';
import Gopi from "./m1.jpg"
import Gopi1 from "./c2.jpg"
import Gopi2 from "./c1.jpg"

function Carosel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gopi}
          alt="First slide"
          height="300px"
          
        />
        <Carousel.Caption>
          
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gopi1}
          alt="Second slide"
          height="300px"
        />

        <Carousel.Caption>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gopi2}
          alt="Third slide"
          height="300px"
        />

        <Carousel.Caption>
        
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosel

