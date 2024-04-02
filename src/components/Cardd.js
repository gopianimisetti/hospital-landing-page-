import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Chandu2 from "./d3.jpg";
import Chandu3 from "./d5.jpg";
import Chandu4 from "./d4.jpg";
import Chandu5 from "./d5.jpg";

function Cardd() {
  return (
    <div style={{ margin: "30px", backgroundColor: "skyblue" }}>
      <h1 id='c1' style={{ textAlign: "center" }}>Doctors</h1>
      <CardGroup>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <Card>
              <Card.Img variant="top" src={Chandu3} />
              <Card.Body>
                <Card.Title>Dr.</Card.Title>
                <Card.Text>A cardiologist is a healthcare provider who can treat chest pain, high blood pressure, and heart failure.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <center><small style={{ backgroundColor: 'lightblue' }}>Cardiologist</small></center>
              </Card.Footer>
            </Card>
          </div>
          <div className="col">
            <Card>
              <Card.Img variant="top" src={Chandu2} />
              <Card.Body>
                <Card.Title>Dr.</Card.Title>
                <Card.Text>A doctor who specializes in neurology is called a neurologist. The neurologist treats disorders that affect the brain.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <center><small style={{ backgroundColor: 'lightblue' }}>Neurologist</small></center>
              </Card.Footer>
            </Card>
          </div>
          <div className="col">
            <Card>
              <Card.Img variant="top" src={Chandu3} />
              <Card.Body>
                <Card.Title>Dr.</Card.Title>
                <Card.Text>A gynecologist is a doctor who specializes in female reproductive health.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <center><small style={{ backgroundColor: 'lightblue' }}>Gynecologist</small></center>
              </Card.Footer>
            </Card>
          </div>
          <div className="col">
            <Card>
              <Card.Img variant="top" src={Chandu4} />
              <Card.Body>
                <Card.Title>Dr.</Card.Title>
                <Card.Text>A nephrologist is a physician who studies and deals with nephrology.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <center><small style={{ backgroundColor: 'lightblue' }}>Nephrologist</small></center>
              </Card.Footer>
            </Card>
          </div>
          <div className="col">
            <Card>
              <Card.Img variant="top" src={Chandu5} />
              <Card.Body>
                <Card.Title>Dr.</Card.Title>
                <Card.Text>A doctor who specializes in the brain, spinal cord, and nerves is a neurologist. A neurologist treats patients.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <center><small style={{ backgroundColor: 'lightblue' }}>Neurologist</small></center>
              </Card.Footer>
            </Card>
          </div>
          <div className="col">
            <Card>
              <Card.Img variant="top" src={Chandu4} />
              <Card.Body>
                <Card.Title>Dr.</Card.Title>
                <Card.Text>A gynecologist is a doctor who specializes in female reproductive health.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <center><small style={{ backgroundColor: 'lightblue' }}>Gynecologist</small></center>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </CardGroup>
    </div>
  );
}

export default Cardd;
