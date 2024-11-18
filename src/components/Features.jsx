import { Card, Container, Row, Col } from 'react-bootstrap';

function Features() {
    const featureList = [
        { title: 'Focus Sessions', description: 'Initiate your sessions easily, allowing you to focus more on work than on planning.', icon: 'bi bi-calendar2-check' },
        { title: 'Time Tracking', description: 'Effortlessly monitor the time left on your tasks to stay focused and productive.', icon: 'bi bi-hourglass-split' },
        { title: 'Reminders', description: 'Get notified when it\'s time to begin and wrap up your tasks.', icon: 'bi bi-bell' },
        { title: 'Precise Finish Time Predictions', description: 'Get precise predictions on your completion time, allowing you to plan your day more effectively.', icon: 'bi bi-watch' },
        { title: 'Conscious Timing', description: 'Stay informed about any time overruns on your tasks by knowing exactly how much longer your focus session will extend.', icon: 'bi bi-person-check' },
        { title: 'Quantify your Progress', description: 'Get a detailed report on the time you\'ve saved by using this app.', icon: 'bi bi-graph-up-arrow' }
    ];

    return (
        <div className={"my-3 d-flex flex-column align-items-center"}>
            <h2 className="text-center mb-4">How will this app help you master your time?</h2>
            <Row className={"w-100"}>
                {featureList.map((feature, idx) => (
                    <Col md={4} key={idx}>
                        <Card className="text-center mb-4" style={{border: 'none', backgroundColor: 'transparent'}}>
                            <Card.Body>
                                <div className="mb-3" style={{fontSize: '40px', color: '#007bff'}}>
                                    <i className={feature.icon}></i> {/* Display the icon */}
                                </div>
                                <Card.Title>{feature.title}</Card.Title>
                                <Card.Text>{feature.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Features;