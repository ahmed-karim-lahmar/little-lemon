import { initializeTimes, updateTimes } from "@components/BookingPage";
import { expect } from "vitest";
import { describe } from "vitest";
import { it } from "vitest";

describe("initializeTimes", () => {
  it("should return the correct initial times array", () => {
    const result = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    expect(initializeTimes()).toEqual(result);
  });
});

describe("updateTimes", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  it("should return the same state when action type is not 'updateTimes'", () => {
    const action = { type: "notUpdateTimes" };
    expect(updateTimes(initialState, action)).toEqual(initialState);
  });

  it("should return the updated times array when action type is 'updateTimes'", () => {
    const action = { type: "updateTimes" };
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];

    expect(updateTimes(initialState, action)).toEqual(expectedTimes);
  });
});
