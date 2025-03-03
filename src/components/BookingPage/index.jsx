import { useState } from "react";
import Banner from "@components/Banner";
import Contacts from "@components/Contacts";
import BookingForm from "@components/BookingForm";
import styles from "./BookingPage.module.css";

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  return (
    <>
      <Banner />
      <section className={styles.content}>
        <Contacts />
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
      </section>
    </>
  );
};

export default BookingPage;
