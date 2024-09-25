import { Container, Button, Row, Col, Image } from 'react-bootstrap';

function Hero() {
    return (
        <Container className="hero-section" style={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
            {/*<Row>*/}
                {/*<Col md={6} className="align-self-center">*/}
                    <h1 className={"display-1"}>FocusFlow</h1>
                    <h1 className={"display-4 p-3"}>Boost Your Productivity with Our App</h1>

                    <p>Manage your tasks, set goals, and track your progress with ease.</p>
                    {/*TOOD: insert link to survey*/}
                    <a href="https://our-survey.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" size="lg" >
                            Participate in our survey
                        </Button>
                    </a>
                {/*</Col>*/}
                {/*<Col md={6}>*/}
                {/*    <Image src="/path-to-app-screenshot.png" alt="App Screenshot" fluid />*/}
                {/*</Col>*/}
            {/*</Row>*/}
        </Container>
    );
}

export default Hero;