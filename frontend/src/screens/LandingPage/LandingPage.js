import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className="main">
            <Container>
                <Row>
                    <Col>
                        <div className="intro-text">
                            <div>
                                <h1 className="title">Welcome to Note Zipper</h1>
                                <p className="subtitle">One Safe Place for all your noted</p>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <a href="/login">
                                <Button size="lg" className="landingButton">Login</Button>
                            </a>
                            <a href="/register">
                                <Button className="landingButton" variant="outline-primary">Sign Up</Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
