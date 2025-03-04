import Banner from "@components/Banner";
import Contacts from "@components/Contacts";
import BookingForm from "@components/BookingForm";
import styles from "./BookingPage.module.css";
import { useReducer } from "react";
import { useNavigate } from "react-router";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "updateTimes":
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const date = new Date();
  const data = fetchAPI(date);
  return data;
};

const BookingPage = () => {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const result = submitAPI(formData);
    if (result) {
      navigate("/confirmed-booking");
    }
  };

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
          onSubmit={submitForm}
        />
      </section>
    </>
  );
};

export default BookingPage;
