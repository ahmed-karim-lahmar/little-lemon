import { test, vi, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "@components/BookingForm";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const setAvailableTime = vi.fn();

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      availableTimes={availableTimes}
      setAvailableTimes={setAvailableTime}
    />
  );
  const headingElement = screen.getByText("Table Reservation");
  expect(headingElement).toBeInTheDocument();
});

test("BookingForm component can be submitted by the user", async () => {
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

  await waitFor(() => fireEvent.click(submitBtn));
  await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
  expect(onSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
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
