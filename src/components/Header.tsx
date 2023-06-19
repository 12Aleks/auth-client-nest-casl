import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'
import {useApiDispatch, useApiSelector} from "../store/hoock";
import {logout} from "../store/slices/auth.slice";
import {useRouter} from "next/router";
import {decoding} from "../routing/decoding";
import {IUser} from "../types";
import {authRout, LOGIN_ROUTE} from "../routing/paths";

const Header = () => {
    const dispatch = useApiDispatch()
    const [user, setUser] = useState<Pick<IUser, 'name' | 'role'>| null>(null)
    const {userToken: token} = useApiSelector(state => state.auth)
    const router = useRouter()

    useEffect(() => {
        token && setUser(decoding(token))
    }, [token])


    function userLogout(){
        dispatch(logout());
        router.push(LOGIN_ROUTE)
    }

    return (
        <>
            <Navbar bg="light" variant="light" className="navbar">
                <Container>
                    <Link href="/home" className='text-decoration-none'>
                        <Navbar.Brand className='fw-bold'>nextAuth</Navbar.Brand>
                    </Link>
                    <Nav className="justify-content-end">
                        {
                            user?.role && authRout.map(link =>
                                <Nav.Link href={link.path}>{link.component}</Nav.Link>
                            )
                        }
                        <Nav.Link onClick={() => userLogout()}>Logout</Nav.Link>
                        <Nav.Link>| <b>Hello {user?.name}</b></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="border border-2 border-primary"></div>
        </>
    );
};

export default Header;