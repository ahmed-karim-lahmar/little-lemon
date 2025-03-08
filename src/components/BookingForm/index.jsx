import { useState, useEffect } from "react";
import { Button, FormInput } from "@components/Shared";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./BookingForm.module.css";
import guests from "@assets/guests.svg";
import occasion from "@assets/occasion.svg";
import time from "@assets/time.svg";

const BookingForm = ({ availableTimes, setAvailableTimes, onSubmit }) => {
  const validationSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    time: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    guests: Yup.string().required("Required"),
    occasion: Yup.string(),
    seating: Yup.string().required("Required"),
    request: Yup.string(),
  });

  const guestsOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "More than 5", value: "more than 5" },
  ];

  const occasionOptions = [
    { label: "Birthday", value: "Birthday" },
    { label: "Anniversary", value: "Anniversary" },
    { label: "Engagement", value: "Engagement" },
  ];

  const [timeOptions, setTimeOptions] = useState([]);

  useEffect(() => {
    setTimeOptions(
      availableTimes.map((time) => ({
        label: time,
        value: time,
      }))
    );
  }, [availableTimes]);

  const handleDateChange = (e, handleChange) => {
    handleChange(e);
    setAvailableTimes({ type: "updateTimes", payload: e.target.value });
  };

  const handleSubmit = (values, setSubmitting) => {
    setTimeout(() => {
      onSubmit(values);
      setSubmitting(false);
      console.log("Table reservation submitted", values);
    }, 1000);
  };
  return (
    <section id="#reservation" className={styles.reservation}>
      <h2 id="form-title" className={`sub-title ${styles.title}`}>
        Table Reservation
      </h2>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          time: "",
          date: "",
          guests: "",
          occasion: "",
          seating: "",
          request: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) =>
          handleSubmit(values, setSubmitting)
        }
      >
        {({
          values,
          isValid,
          errors,
          touched,
          setFieldValue,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form aria-labelledby="form-title" onSubmit={(e) => handleSubmit(e)}>
            <fieldset className={styles.row}>
              <div className={styles.formGroup}>
                <label className={`section-category`} htmlFor="firstname">
                  Firstname:
                </label>
                <Field
                  component={FormInput}
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Enter your Firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                />
                <div className={styles.errorWrapper}>
                  <ErrorMessage
                    className={styles.error}
                    name="firstname"
                    component="span"
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={`section-category`} htmlFor="lastname">
                  Lastname:
                </label>
                <Field
                  component={FormInput}
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Enter your Lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                />
                <div className={styles.errorWrapper}>
                  <ErrorMessage
                    className={styles.error}
                    name="lastname"
                    component="span"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className={styles.row}>
              <div className={styles.formGroup}>
                <label className={`section-category`} htmlFor="email">
                  Email:
                </label>
                <Field
                  component={FormInput}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                />
                <div className={styles.errorWrapper}>
                  <ErrorMessage
                    className={styles.error}
                    name="email"
                    component="span"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className={styles.row}>
              <div className={styles.formGroup}>
                <label className={`section-category`} htmlFor="date">
                  Date:
                </label>
                <Field
                  component={FormInput}
                  type="date"
                  id="date"
                  name="date"
                  value={values.date}
                  onChange={(e) => handleDateChange(e, handleChange)}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                />
                <div className={styles.errorWrapper}>
                  <ErrorMessage
                    className={styles.error}
                    name="date"
                    component="span"
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={`section-category`} htmlFor="time">
                  Time:
                </label>
                <Field
                  component={FormInput}
                  icon={time}
                  type="time"
                  id="time"
                  name="time"
                  options={timeOptions}
                  value={values.time}
                  onChange={(option) => {
                    setFieldValue("time", option.value);
                  }}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                />
                <div className={styles.errorWrapper}>
                  <ErrorMessage
                    className={styles.error}
                    name="time"
                    component="span"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className={styles.row}>
              <div className={styles.formGroup}>
                <label className={`section-category`} htmlFor="guests">
                  Number of Guests:
                </label>
                <Field
                  component={FormInput}
                  icon={guests}
                  type="guests"
                  id="guests"
                  name="guests"
                  value={values.guests}
                  onChange={(option) => {
                    setFieldValue("guests", option.value);
                  }}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                  options={guestsOptions}
                />
                <div className={styles.errorWrapper}>
                  <ErrorMessage
                    className={styles.error}
                    name="guests"
                    component="span"
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={`section-category`} htmlFor="occasion">
                  Occasion (optional):
                </label>
                <Field
                  component={FormInput}
                  icon={occasion}
                  type="occasion"
                  id="occasion"
                  name="occasion"
                  value={values.occasion}
                  onChange={(option) => {
                    setFieldValue("occasion", option.value);
                  }}
                  onBlur={handleBlur}
                  aria-required="false"
                  options={occasionOptions}
                />
              </div>
            </fieldset>

            <fieldset className={styles.row}>
              <div className={styles.formGroup}>
                <label className={`section-category`}>Seating:</label>
                <div className={styles.radioGroup}>
                  <Field
                    component={FormInput}
                    type="radio"
                    id="indoor"
                    name="seating"
                    value="indoor"
                    label="Indoor"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                  />

                  <Field
                    component={FormInput}
                    type="radio"
                    id="outdoor"
                    name="seating"
                    value="outdoor"
                    label="Outdoor"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                  />
                </div>
                <div className={styles.errorWrapper}>
                  <ErrorMessage
                    className={styles.error}
                    name="seating"
                    component="span"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className={styles.row}>
              <div className={styles.formGroup}>
                <label className={`section-category`} htmlFor="request">
                  Special Requests (optional):
                </label>
                <Field
                  component={FormInput}
                  type="textarea"
                  id="request"
                  name="request"
                  placeholder="Tell us what you need."
                  onChange={handleChange}
                />
              </div>
            </fieldset>

            <Button
              data-testid="submit-btn"
              className={styles.submitBtn}
              type="submit"
              onClick={handleSubmit}
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "Reserving..." : "Reserve a Table"}
            </Button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default BookingForm;
