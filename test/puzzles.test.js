const { daysBetween, compareTargetAndGuess } = require("../public/puzzles");

describe("puzzles", () => {
  describe("daysBetween", () => {
    it("same day", () => {
      const start = new Date(2022, 1 - 1, 18);
      const end = new Date(2022, 1 - 1, 18);
      expect(daysBetween(start, end)).toBe(0);
    });

    it("exactly one day", () => {
      const start = new Date("2022-01-23T00:00Z");
      const end = new Date("2022-01-24T00:00Z");
      expect(daysBetween(start, end)).toBe(1);
    });

    it("month later", () => {
      const start = new Date(2022, 1 - 1, 18);
      const end = new Date(2022, 2 - 1, 18);
      expect(daysBetween(start, end)).toBe(31);
    });
  });

  describe("compareTargetAndGuess", () => {
    it("full match", () => {
      expect(compareTargetAndGuess("feet", "feet")).toEqual([
        "match",
        "match",
        "match",
        "match",
      ]);
    });

    it("miss", () => {
      expect(compareTargetAndGuess("feet", "pqrs")).toEqual([
        "miss",
        "miss",
        "miss",
        "miss",
      ]);
    });

    it("double letter, no matches", () => {
      expect(compareTargetAndGuess("feet", "fame")).toEqual([
        "match",
        "miss",
        "miss",
        "present",
      ]);
    });

    it("double letter, one match", () => {
      expect(compareTargetAndGuess("feet", "mere")).toEqual([
        "miss",
        "match",
        "miss",
        "present",
      ]);
    });

    it("single letter, two guesses", () => {
      expect(compareTargetAndGuess("fate", "feel")).toEqual([
        "match",
        "present",
        "miss",
        "miss",
      ]);
    });
  });
});