import { Button } from "@components/Shared";
import styles from "./Reservation.module.css";

const Reservation = () => {
  const handleSubmit = () => {
    console.log("Reservation submitted");
  };
  return (
    <section id="#reservation" className={styles.reservation}>
      <h2 className={`sub-title ${styles.title}`}>Table Reservation</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="firstname">
              Firstname:
            </label>
            <input type="text" id="firstname" />
          </div>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="lastname">
              Lastname:
            </label>
            <input type="text" id="lastname" />
          </div>
        </fieldset>

        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="email">
              Email:
            </label>
            <input type="text" id="email" />
          </div>
        </fieldset>

        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="time">
              Time:
            </label>
            <input type="text" id="time" />
          </div>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="date">
              Date:
            </label>
            <input type="text" id="date" />
          </div>
        </fieldset>

        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="guests">
              Number of Guests:
            </label>
            <input type="text" id="guests" />
          </div>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="occasion">
              Occasion:
            </label>
            <input type="text" id="occasion" />
          </div>
        </fieldset>

        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`}>Seating:</label>
            <div className={styles.radioGroup}>
              <label className={`paragraph-text`} htmlFor="indoor">
                <input
                  type="radio"
                  id="indoor"
                  name="seating"
                  value={"indoor"}
                />
                Indoor
              </label>
              <label className={`paragraph-text`} htmlFor="outdoor">
                <input
                  type="radio"
                  id="outdoor"
                  name="seating"
                  value={"outdoor"}
                />
                Outdoor
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="request">
              Special Requests (optional):
            </label>
            <textarea id="request" />
          </div>
        </fieldset>

        <Button
          className={styles.submitBtn}
          type="submit"
          onClick={handleSubmit}
        >
          Reserve a Table
        </Button>
      </form>
    </section>
  );
};

export default Reservation;
