import { Card, Container, Row, Col } from 'react-bootstrap';

function Features() {
    const featureList = [
        { title: 'Focus Sessions', description: 'Initiate your sessions easily, allowing you to focus more on work than on planning.', icon: 'bi bi-alarm' },
        { title: 'Time Tracking', description: 'Effortlessly monitor the time left on your tasks to stay focused and productive.', icon: 'bi bi-clock' },
        { title: 'Reminders', description: 'Get notified when it\'s time to begin and wrap up your tasks.', icon: 'bi bi-bell' },
        { title: 'Quantify your Progress', description: 'Get a detailed report on the time you\'ve saved by using this app.', icon: 'bi bi-graph-up' }
    ];

    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">App Features</h2>
            <Row>
                {featureList.map((feature, idx) => (
                    <Col md={4} key={idx}>
                        <Card className="text-center mb-4" style={{ border: 'none', backgroundColor: 'transparent' }}>
                            <Card.Body>
                                <div className="mb-3" style={{ fontSize: '40px', color: '#007bff' }}>
                                    <i className={feature.icon}></i> {/* Display the icon */}
                                </div>
                                <Card.Title>{feature.title}</Card.Title>
                                <Card.Text>{feature.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Features;