import useSWR from "swr";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import data from "../data.js";
import Card from "../src/components/Card";


export default function Home({data}) {
//   let [shoesList, setShoesList] = useState(data);
//   useEffect(() => {
    // setShoesList(data)
//   }, []);
  return (
    <div className={styles.container}>
      <Button variant="primary">Primary</Button>{" "}
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">HappySheo</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Cart</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="main-bg"></div>
        <Container>
          <Row>
              {data.map((item) => <Card item={item}/>)}
          </Row>
        </Container>
      </>
    </div>
  );
}
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api')
    const data = await res.json()
  return {
    props: {
      data,
    },
  };
}
