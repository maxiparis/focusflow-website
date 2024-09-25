import { Card, Container, Row, Col } from 'react-bootstrap';

function Features() {
    const featureList = [
        { title: 'Focus Sessions', description: 'Initiate your sessions effortlessly, allowing you to focus more on work than on planning.', imgSrc: '/task.png' },
        { title: 'Time Tracking', description: 'Effortlessly monitor the time left on your tasks to stay focused and productive.', imgSrc: '/goal.png' },
        { title: 'Reminders', description: 'Get notified when it\'s time to begin and wrap up your tasks.', imgSrc: '/reminder.png' },
        { title: 'Quantify your Progress', description: 'Get a detailed report on the time you\'ve saved by using this app.', imgSrc: '/reminder.png' }
    ];

    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">App Features</h2>
            <Row>
                {featureList.map((feature, idx) => (
                    <Col md={4} key={idx}>
                        <Card className="text-center mb-4" style={{ border: 'none', backgroundColor: 'transparent' }}>
                            {/*<Card.Img variant="top" src={feature.imgSrc} style={{ height: '100px', margin: 'auto' }} />*/}
                            <Card.Body>
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