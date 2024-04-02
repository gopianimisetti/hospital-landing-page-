import React from 'react';
import { useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Veer from "./care-hospital-logo.jpg";

const Logout = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
    
        navigate('/');
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="text-center">
                    <img src={Veer} className="hospital-logo" alt='Hospital Logo' />
                        <h2 className="mb-4">Logout Successful</h2>
                        <p>You have been successfully logged out.</p>
                        <Button onClick={handleRedirect} variant="primary">Back to Home</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Logout;



