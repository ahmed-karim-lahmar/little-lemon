import "./App.css";
import { Header, Nav } from "@components/Header";
import Footer from "@components/Footer";
import { Route, Routes } from "react-router";
import HomePage from "@components/HomePage";
import BookingPage from "@components/BookingPage";
import NotFound from "@components/NotFound";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
