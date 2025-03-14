import { test, vi, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "@components/BookingForm";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const setAvailableTime = vi.fn();

test("Writes form values to local storage", async () => {
  const onSubmit = vi.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      setAvailableTimes={setAvailableTime}
      onSubmit={onSubmit}
    />
  );

  const firstnameInput = screen.getByLabelText("Firstname:");
  const lastnameInput = screen.getByLabelText("Lastname:");
  const emailInput = screen.getByLabelText("Email:");
  const dateInput = screen.getByLabelText("Date:");
  const timeInput = screen.getByTestId("time-input");
  const guestsInput = screen.getByTestId("guests-input");
  const occasionInput = screen.getByTestId("occasion-input");
  const seatingInputIndoor = screen.getByLabelText("Indoor");
  const seatingInputOutdoor = screen.getByLabelText("Outdoor");
  const requestInput = screen.getByLabelText("Special Requests (optional):");

  fireEvent.change(firstnameInput, { target: { value: "John" } });
  fireEvent.change(lastnameInput, { target: { value: "Doe" } });
  fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

  fireEvent.change(dateInput, { target: { value: "2025-03-05" } });

  fireEvent.click(timeInput);
  const timeOption = screen.getByRole("option", { name: "17:00" });
  fireEvent.click(timeOption);

  fireEvent.click(guestsInput);
  const guestOption = screen.getByText("2");
  fireEvent.click(guestOption);

  fireEvent.click(occasionInput);
  const occasionOption = screen.getByText("Birthday");
  fireEvent.click(occasionOption);

  fireEvent.click(seatingInputIndoor);
  fireEvent.change(requestInput, { target: { value: "Special request" } });

  await waitFor(() => {
    expect(localStorage.getItem("reservationForm")).toBe(
      JSON.stringify({
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        time: "17:00",
        date: "2025-03-05",
        guests: "2",
        occasion: "Birthday",
        seating: "indoor",
        request: "Special request",
      })
    );
  });
});

test("Reads form values from local storage", async () => {
  localStorage.setItem(
    "reservationForm",
    JSON.stringify({
      firstname: "John",
      lastname: "Doe",
      email: "john.doe@example.com",
      time: "17:00",
      date: "2025-03-05",
      guests: "2",
      occasion: "Birthday",
      seating: "indoor",
      request: "Special request",
    })
  );

  const onSubmit = vi.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      setAvailableTimes={setAvailableTime}
      onSubmit={onSubmit}
    />
  );

  const firstnameInput = screen.getByLabelText("Firstname:");
  const lastnameInput = screen.getByLabelText("Lastname:");
  const emailInput = screen.getByLabelText("Email:");
  const dateInput = screen.getByLabelText("Date:");
  const timeInput = screen.getByTestId("time-input");
  const guestsInput = screen.getByTestId("guests-input");
  const occasionInput = screen.getByTestId("occasion-input");
  const seatingInputIndoor = screen.getByLabelText("Indoor");
  const seatingInputOutdoor = screen.getByLabelText("Outdoor");
  const requestInput = screen.getByLabelText("Special Requests (optional):");

  await waitFor(() => {
    expect(firstnameInput.value).toBe("John");
    expect(lastnameInput.value).toBe("Doe");
    expect(emailInput.value).toBe("john.doe@example.com");
    expect(dateInput.value).toBe("2025-03-05");
  });
  await waitFor(() => {
    expect(timeInput.textContent).toBe("17:00");
    expect(guestsInput.textContent).toBe("2");
    expect(occasionInput.textContent).toBe("Birthday");
  });
  await waitFor(() => {
    expect(seatingInputIndoor.checked).toBe(true);
    expect(seatingInputOutdoor.checked).toBe(false);
    expect(requestInput.value).toBe("Special request");
  });
});

test("Validates form input attributes", () => {
  const onSubmit = vi.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      setAvailableTimes={setAvailableTime}
      onSubmit={onSubmit}
    />
  );

  const submitBtn = screen.getByTestId("submit-btn");
  const firstnameInput = screen.getByLabelText("Firstname:");
  const lastnameInput = screen.getByLabelText("Lastname:");
  const emailInput = screen.getByLabelText("Email:");
  const dateInput = screen.getByLabelText("Date:");
  const timeInput = screen.getByTestId("time-input");
  const guestsInput = screen.getByTestId("guests-input");
  const occasionInput = screen.getByTestId("occasion-input");
  const seatingInputIndoor = screen.getByLabelText("Indoor");
  const seatingInputOutdoor = screen.getByLabelText("Outdoor");
  const requestInput = screen.getByLabelText("Special Requests (optional):");

  expect(firstnameInput)
    .toHaveAttribute("required")
    .toHaveAttribute("placeholder", "Enter your Firstname");
  expect(lastnameInput)
    .toHaveAttribute("required")
    .toHaveAttribute("placeholder", "Enter your Lastname");
  expect(emailInput)
    .toHaveAttribute("required")
    .toHaveAttribute("type", "email")
    .toHaveAttribute("placeholder", "Enter your Email");
  expect(dateInput).toHaveAttribute("required").toHaveAttribute("type", "date");
  expect(timeInput).toHaveAttribute("required");
  expect(guestsInput).toHaveAttribute("required");
  expect(occasionInput).not.toHaveAttribute("required");
  expect(seatingInputIndoor).toHaveAttribute("required");
  expect(seatingInputOutdoor).toHaveAttribute("required");
  expect(requestInput)
    .toHaveAttribute("placeholder", "Tell us what you need.")
    .not.toHaveAttribute("required");
  expect(submitBtn).toHaveAttribute("type", "submit");
});
