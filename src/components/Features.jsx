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
        <div id='demo' className={"my-3 d-flex flex-column align-items-center"}>

            <h1>How does it work? ⬇️</h1>
            <h2 className="mt-5 mb-3">Demo in English</h2>
            <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/l4WQk_xYXv4?si=5DowpFU-Dm1_1JLH"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </div>

            <h2 className="mt-5 mb-3">Demo in Spanish</h2>
            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/8m7kbKdoQfI?si=e-rXuFKKBWMhZPLc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>

            <h2 id='features' className="text-center my-4">How will this app help you master your time?</h2>
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