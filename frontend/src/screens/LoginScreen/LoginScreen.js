import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import MainScreen from '../../components/MainScreen';
import axios from 'axios';
import './LoginScreen.css';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { login } from '../../actions/userActions';

import { useDispatch, useSelector } from 'react-redux';


const LoginScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error } = userLogin;

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return <MainScreen title="LOGIN" >
        <div className="loginContainer">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Row className="py-3">
                <Col>
                    New Customer ? <Link to="/register">Register Here</Link>
                </Col>
            </Row>
        </div>
    </MainScreen>
}

export default LoginScreen;
