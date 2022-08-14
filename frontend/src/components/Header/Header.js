import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions';

import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const useLogin = useSelector(state => state.userLogin);

    const { userInfo } = useLogin;

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        Note Zipper
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            {/* <Button variant="outline-success">Search</Button> */}
                        </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/mynotes">My Notes</Nav.Link>
                        <NavDropdown title="Kuldeep Singh" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logoutHandler}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}
