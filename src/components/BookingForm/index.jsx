import { useState, useEffect } from "react";
import { Button, FormInput } from "@components/Shared";
import styles from "./BookingForm.module.css";
import guests from "@assets/guests.svg";
import occasion from "@assets/occasion.svg";
import time from "@assets/time.svg";

const BookingForm = ({ availableTimes, setAvailableTimes, onSubmit }) => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    time: "",
    date: "",
    guests: "",
    occasion: "",
    seating: "",
    request: "",
  });

  const guestsOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "More than 5", value: "more than 5" },
  ];

  const handleChangeGuests = (e) => {
    console.log(e);
  };

  const occasionOptions = [
    { label: "Birthday", value: "Birthday" },
    { label: "Anniversary", value: "Anniversary" },
    { label: "Engagement", value: "Engagement" },
  ];

  const handleChangeOccasion = (e) => {
    console.log(e);
  };

  const [timeOptions, setTimeOptions] = useState([]);

  useEffect(() => {
    setTimeOptions(
      availableTimes.map((time) => ({
        label: time,
        value: time,
      }))
    );
  }, [availableTimes]);

  const handleChangeTime = (e) => {
    console.log(e);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "date") {
      setAvailableTimes({ type: "updateTimes", payload: value });
    }

    setForm((prevState) => ({
      ...prevState,
      [name]: type === "radio" ? (checked ? value : prevState[name]) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation submitted", form);
    onSubmit(form);
  };
  return (
    <section id="#reservation" className={styles.reservation}>
      <h2 id="form-title" className={`sub-title ${styles.title}`}>
        Table Reservation
      </h2>
      <form aria-labelledby="form-title" onSubmit={(e) => handleSubmit(e)}>
        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="firstname">
              Firstname:
            </label>
            <FormInput
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter your Firstname"
              value={form.firstname}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="lastname">
              Lastname:
            </label>
            <FormInput
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter your Lastname"
              value={form.lastname}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
        </fieldset>

        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="email">
              Email:
            </label>
            <FormInput
              type="text"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={form.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
        </fieldset>

        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="time">
              Time:
            </label>
            <FormInput
              icon={time}
              type="time"
              id="time"
              name="time"
              options={timeOptions}
              value={form.time}
              onChange={handleChangeTime}
              required
              aria-required="true"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="date">
              Date:
            </label>
            <FormInput
              type="date"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
        </fieldset>

        <fieldset className={styles.row}>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="guests">
              Number of Guests:
            </label>
            <FormInput
              icon={guests}
              type="guests"
              id="guests"
              name="guests"
              value={form.guests}
              onChange={handleChangeGuests}
              required
              aria-required="true"
              options={guestsOptions}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={`section-category`} htmlFor="occasion">
              Occasion:
            </label>
            <FormInput
              icon={occasion}
              type="occasion"
              id="occasion"
              name="occasion"
              value={form.occasion}
              onChange={handleChangeOccasion}
              aria-required="false"
              options={occasionOptions}
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
                value="indoor"
                label="Indoor"
                checked={form.seating === "indoor"}
                onChange={handleChange}
                required
                aria-required="true"
              />

              <FormInput
                type="radio"
                id="outdoor"
                name="seating"
                value="outdoor"
                label="Outdoor"
                checked={form.seating === "outdoor"}
                onChange={handleChange}
                required
                aria-required="true"
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
              name="request"
              placeholder="Tell us what you need."
              value={form.request}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <Button
          data-testid="submit-btn"
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

export default BookingForm;
