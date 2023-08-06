import {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'
import {useApiDispatch, useApiSelector} from "../store/hoock";
import {logout} from "../store/slices/auth.slice";
import {useRouter} from "next/router";
import {decoding} from "../routing/decoding";
import {IUser} from "../types";
import {usersRout, adminRout, LOGIN_ROUTE, HOME_ROUTE} from "../routing/paths";
import Styles from '../styles/header.module.scss'

const Header = () => {
    const dispatch = useApiDispatch()
    const [user, setUser] = useState<Pick<IUser, 'name' | 'role'>| null>(null)
    const {userToken: token} = useApiSelector(state => state.auth)
    const router = useRouter()

    useEffect(() => {
        token && setUser(decoding())
    }, [token])


    function userLogout(){
        dispatch(logout());
        setUser(null)
        router.push(HOME_ROUTE)
    }

    function userLogin(){
        dispatch(logout());
        router.push(LOGIN_ROUTE)
    }


    console.log(user?.role)
    return (
        <>
            <Navbar bg="light" variant="light" className={Styles.navbar}>
                <Container>
                    <Link href="/" className='text-decoration-none'>
                        <div className={Styles.wrapper}><Navbar.Brand className='fw-bold'>nextAuth</Navbar.Brand></div>
                    </Link>
                    <Nav className="justify-content-end">
                        {
                            usersRout.map(link =>
                                <Nav.Link key={link.component} href={link.path}>{link.component}</Nav.Link>
                             )
                        }
                        {
                            ['admin', 'editor'].includes(user?.role as string) && adminRout.map(link =>
                                <Nav.Link key={link.component} href={link.path}>{link.component}</Nav.Link>
                            )
                        }
                        {
                            user?.role ? <>
                                <Nav.Link onClick={() => userLogout()}>Logout</Nav.Link>
                                <Nav.Link className="d-flex align-items-center">| <b>Hello {user?.name}</b>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                    </svg>
                                </Nav.Link>
                            </>:<Nav.Link onClick={() => userLogin()}>| Login</Nav.Link>

                        }
                    </Nav>
                </Container>
            </Navbar>
            <div className="border border-2 border-primary"></div>
        </>
    );
};

export default Header;