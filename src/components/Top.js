import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import Link from 'next/link'
// import { useRouter } from "next/router";

import React from 'react'
function Top() {
    // const router = useRouter();
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Link href='/'passHref><Navbar.Brand>HappySheo</Navbar.Brand></Link>
        <Nav className="me-auto">
            <Link href='/'passHref><Nav.Link>HOME</Nav.Link></Link>
            <Link href='/about'passHref><Nav.Link>ABOUT</Nav.Link></Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
  )
}

export default Top