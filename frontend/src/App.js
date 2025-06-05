import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header.js";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1> My First MERN PROJECT </h1>
        </Container>
      </main>
    </>
  );
}

export default App;
