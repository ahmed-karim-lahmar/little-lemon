import { test, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BookingForm from "@components/BookingForm";

test("Renders the BookingForm heading", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const setAvailableTime = vi.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      setAvailableTimes={setAvailableTime}
    />
  );
  const headingElement = screen.getByText("Table Reservation");
  expect(headingElement).toBeInTheDocument();
});
