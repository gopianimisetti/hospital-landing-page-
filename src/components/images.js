import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Esh from "./a1.jpg";
import Esh1 from "./a2.jpg";
import Esh2 from "./a3.jpg";
import Esh3 from "./a4.jpg";
import Esh4 from "./a5.jpg";
import Esh5 from "./a6.jpg";

function Imagess() {
  return (
    <Container style={{ backgroundColor: "skyblue" }}>
      <Row className="justify-content-center">
        <h1 style={{ marginBottom: '60px', marginLeft:"900px" }}>Center Of Excellence</h1>
      </Row>
      <Row className="justify-content-center">
        <Col xs={6} md={4} className="text-center mb-4">
          <Image src={Esh} roundedCircle style={{ width: "200px", height: "200px" }} />
          <p>Cardiac Sciences</p>
        </Col>
        <Col xs={6} md={4} className="text-center mb-4">
          <Image src={Esh1} roundedCircle style={{ width: "200px", height: "200px" }} />
          <p>Gastro Sciences</p>
        </Col>
        <Col xs={6} md={4} className="text-center mb-4">
          <Image src={Esh2} roundedCircle style={{ width: "200px", height: "200px" }} />
          <p>Nephrolog</p>
        </Col>
        <Col xs={6} md={4} className="text-center mb-4">
          <Image src={Esh3} roundedCircle style={{ width: "200px", height: "200px" }} />
          <p>Neurosciences</p>
        </Col>
        <Col xs={6} md={4} className="text-center mb-4">
          <Image src={Esh4} roundedCircle style={{ width: "200px", height: "200px" }} />
          <p>Cardiac Sciences</p>
        </Col>
        <Col xs={6} md={4} className="text-center mb-4">
          <Image src={Esh5} roundedCircle style={{ width: "200px", height: "200px" }} />
          <p>Cardiac Sciences</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Imagess;
 