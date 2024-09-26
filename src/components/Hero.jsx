import { Container, Button, Row, Col, Image } from 'react-bootstrap';

function Hero() {
    return (
        <Container className="hero-section" style={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
            {/*<Row>*/}
                {/*<Col md={6} className="align-self-center">*/}
                    <h1 className={"display-1"}>FocusFlow</h1>
                    <h1 className={"display-4 p-3"}>Boost Your Productivity with Our App</h1>

                    {/*TOOD: insert link to survey*/}
                    <Button variant="success" size="lg" href="https://forms.gle/ukWuVMNYGxAmk3Uk7" >
                        <i className="bi bi-pencil"></i> Participate in our survey
                    </Button>
                {/*</Col>*/}
                {/*<Col md={6}>*/}
                {/*    <Image src="/path-to-app-screenshot.png" alt="App Screenshot" fluid />*/}
                {/*</Col>*/}
            {/*</Row>*/}
        </Container>
    );
}

export default Hero;