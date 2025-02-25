import "./App.css";
import { Header, Nav } from "@components/Header";
import Hero from "@components/Hero";
import Highlights from "@components/Highlights";
import Testimonials from "@components/Testimonials";
import About from "@components/About";
import Footer from "@components/Footer";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
