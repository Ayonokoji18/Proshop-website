import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import HomeScreen from "./screens/homescreen.js";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
