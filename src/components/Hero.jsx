import { Container, Button, Row, Col, Image } from 'react-bootstrap';

function Hero() {

    const handleButtonClick = () => {
        window.open("https://forms.gle/ukWuVMNYGxAmk3Uk7", "_blank");
    };

    return (
        <Container className="hero-section" style={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
            <Row>
                <Col md={6} className="align-self-center mb-4 mb-md-0">
                    <Image
                        src="logoSemiRounded.png"
                        alt="FocusFlow Logo"
                        style={{ width: '100px', height: 'auto', marginRight: '10px' }}
                    />
                    <h1 className="display-1">FocusFlow</h1>
                    <h1 className={"display-4 p-3"}>Boost Your Productivity with Our App</h1>

                    <Button variant="success" size="lg" onClick={handleButtonClick}>
                        <i className="bi bi-pencil"></i> Participate in our survey
                    </Button>
                </Col>
                <Col md={6}>
                    <Image
                        src="demo-removebg.png"
                        alt="App Screenshot"
                        style={{ width: '350px', height: 'auto'}}
                        fluid
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;