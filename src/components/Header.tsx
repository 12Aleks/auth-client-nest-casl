import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'
import {useApiDispatch} from "../store/hoock";
import {logout} from "../store/slices/auth.slice";
import Router from "next/router";

const Header = () => {
    const dispatch = useApiDispatch()

    function userLogout(){
        dispatch(logout());
        Router.push('/')
    }

    return (
        <>
            <Navbar bg="light" variant="light" className="navbar">
                <Container>
                    <Link href="/" className='text-decoration-none'>
                        <Navbar.Brand className='fw-bold'>nextAuth</Navbar.Brand>
                    </Link>
                    <Nav className="justify-content-end">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/articles">Articles</Nav.Link>
                        <Nav.Link onClick={() => userLogout()}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="border border-2 border-primary"></div>
        </>
    );
};

export default Header;