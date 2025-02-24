import Hero from "@components/hero-section/Hero";
import "./App.css";
import Header from "@components/navigation-bar/Header";
import Nav from "@components/navigation-bar/Nav";
import Footer from "@components/Footer";
import Highlights from "@components/highlights/Highlights";
import Testimonials from "@components/testimonials/Testimonials";

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
      </main>
      <Footer />
    </>
  );
}

export default App;
