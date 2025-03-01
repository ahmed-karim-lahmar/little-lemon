import { Button, FormInput } from "@components/Shared";
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
            <FormInput
              type="text"
              id="firstname"
              placeholder="Enter your Firstname"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="lastname">
              Lastname:
            </label>
            <FormInput
              type="text"
              id="lastname"
              placeholder="Enter your Lastname"
            />
          </div>
        </fieldset>

        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="email">
              Email:
            </label>
            <FormInput type="text" id="email" placeholder="Enter your Email" />
          </div>
        </fieldset>

        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="time">
              Time:
            </label>
            <FormInput type="time" id="time" />
          </div>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="date">
              Date:
            </label>
            <FormInput type="date" id="date" />
          </div>
        </fieldset>

        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="guests">
              Number of Guests:
            </label>
            <FormInput
              type="guests"
              id="guests"
              placeholder="Select Not implemented"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="occasion">
              Occasion:
            </label>
            <FormInput
              type="occasion"
              id="occasion"
              placeholder="Select Not implemented"
            />
          </div>
        </fieldset>

        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`}>Seating:</label>
            <div className={styles.radioGroup}>
              <FormInput
                type="radio"
                id="indoor"
                name="seating"
                value={"indoor"}
                label="Indoor"
              />

              <FormInput
                type="radio"
                id="outdoor"
                name="seating"
                value={"outdoor"}
                label="Outdoor"
              />
            </div>
          </div>
        </fieldset>

        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="request">
              Special Requests (optional):
            </label>
            <FormInput
              type="textarea"
              id="request"
              placeholder="Tell us what you need."
            />
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
