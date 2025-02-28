import Banner from "@components/Banner";
import Contacts from "@components/Contacts";
import Reservation from "@components/Reservation";
import styles from "./BookingPage.module.css";

const BookingPage = () => {
  return (
    <>
      <Banner />
      <section className={styles.content}>
        <Contacts />
        <Reservation />
      </section>
    </>
  );
};

export default BookingPage;
