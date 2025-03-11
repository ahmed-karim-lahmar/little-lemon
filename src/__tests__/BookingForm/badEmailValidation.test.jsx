import { test, vi, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "@components/BookingForm";
import userEvent from "@testing-library/user-event";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const setAvailableTime = vi.fn();

test("Validates form inputs and Should fail with invalid email", async () => {
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

  const user = userEvent.setup();

  await user.type(firstnameInput, "John");
  await user.type(lastnameInput, "Doe");
  await user.type(emailInput, "johndoe.com");
  await fireEvent.blur(emailInput);
  await waitFor(() => {
    const errorMessage = screen.getByText(/Invalid email/i);
    expect(errorMessage.innerHTML).toBe("Invalid email");
  });
  await user.type(dateInput, "2025-03-05");
  await user.click(timeInput);
  await user.click(screen.getByRole("option", { name: "17:00" }));
  await user.click(guestsInput);
  await user.click(screen.getByRole("option", { name: "2" }));
  await user.click(occasionInput);
  await user.click(screen.getByRole("option", { name: "Birthday" }));
  await user.click(seatingInputIndoor);
  await user.type(requestInput, "Special request");
  await user.click(submitBtn);

  await waitFor(() => {
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
