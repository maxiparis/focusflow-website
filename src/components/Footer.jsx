import {Col, Container, Row} from "react-bootstrap";


export default function OurFooter() {
    return (
        <footer className="footer">
            <Container className={"bg-body-secondary"}>
                <Row>
                    <Col className="text-center mt-3">
                        <p className="mb-0">&copy; 2025 FocusFlow. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}