import { Container, Button, Row, Col, Image } from 'react-bootstrap';

function Hero() {

    const handleButtonClickEnglish = () => {
        window.open("https://forms.gle/5Zp8tvTjPUwXPWEJ7", "_blank");
    };

    const handleButtonClickSpanish = () => {
        window.open("https://forms.gle/VnpSREAQLfpVFzXD7", "_blank");
    };

    return (
        <Container className="hero-section d-flex align-content-center justify-content-center" style={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
            <Row className={"w-100 d-flex align-items-center"}>
                <Col md={6} className="align-self-center mb-4 mb-md-0">
                    <Image
                        className="custom-logo"
                        src="logoSemiRounded.png"
                        alt="FocusFlow Logo"
                        style={{maxWidth: '80px', height: 'auto'}}
                    />
                    <h1 className="display-1">FocusFlow</h1>
                    <h1 className={"display-4 p-3"}>Boost Your Productivity with Our App</h1>

                    <Row className="mb-3">
                        <Col>
                            <Button variant="success" size="md-lg" onClick={handleButtonClickEnglish}>
                                <i className="bi bi-pencil"></i> Participate in our survey! (English)
                            </Button>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Button variant="primary" size="md-lg" onClick={handleButtonClickSpanish}>
                                <i className="bi bi-pencil"></i> Participa en nuestra encuesta! (Spanish)
                            </Button>

                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Image
                        src="3-screenshots-together.png"
                        alt="App Screenshot"
                        style={{width: '750px', height: 'auto'}}
                        fluid
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;