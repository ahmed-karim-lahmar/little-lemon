import Banner from "@components/Banner";
import Contacts from "@components/Contacts";
import BookingForm from "@components/BookingForm";
import styles from "./BookingPage.module.css";
import { useReducer } from "react";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "updateTimes":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

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
