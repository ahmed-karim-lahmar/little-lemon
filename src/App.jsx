import "./App.css";
import { Header, Nav } from "@components/Header";
import Footer from "@components/Footer";
import { Route, Routes } from "react-router";
import HomePage from "@components/HomePage";
import BookingPage from "@components/BookingPage";
import NotFound from "@components/NotFound";
import ConfirmedBooking from "@components/ConfirmedBooking";

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
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
