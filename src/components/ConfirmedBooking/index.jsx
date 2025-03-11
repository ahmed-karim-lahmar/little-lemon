import { Button } from "@components/Shared";
import styles from "./ConfirmedBooking.module.css";
import { useNavigate } from "react-router";

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.confirmed}>
      <h1 className={`display-title ${styles.largeText}`}>
        Reservation Confirmed
      </h1>
      <p className={`paragraph-text ${styles.descriptionText}`}>
        Thank you for choosing <span className={styles.bold}>Little Lemon</span>
        .<br /> We will contact you soon
      </p>
      <Button className={styles.homeBtn} onClick={() => navigate("/")}>
        Go Home
      </Button>
      <img src="/cute-lemon.png" alt="Cute Lemon Image" />
    </section>
  );
};

export default ConfirmedBooking;
