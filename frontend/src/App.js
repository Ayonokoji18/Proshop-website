import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
