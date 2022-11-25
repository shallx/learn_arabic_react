import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

export default function HomeView() {
  const { brand } = useSelector((state) => state.brand);
  return (
    <Container>
      <h1>Home</h1>
      <h2>{brand}</h2>
    </Container>
  );
}