import { Container, Button, Row, Col, Image } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


function Hero() {
    return (
        <Container fluid className="hero-section" style={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
            <Row>
                {/*<Col md={6} className="align-self-center">*/}
                    <h1 className={"display-2"}>FocusFlow</h1>
                    <h1 className={"display-4"}>Boost Your Productivity with Our App</h1>

                    <p>Manage your tasks, set goals, and track your progress with ease.</p>
                    <Button variant="primary" size="lg">Participate in our survey</Button>
                {/*</Col>*/}
                {/*<Col md={6}>*/}
                {/*    <Image src="/path-to-app-screenshot.png" alt="App Screenshot" fluid />*/}
                {/*</Col>*/}
            </Row>
        </Container>
    );
}
export default Hero;