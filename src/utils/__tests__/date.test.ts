import { monthOptions, yearOptions } from "../date";

describe("utils/date.ts", () => {
  describe("monthOptions", () => {
    it("returns month options", () => {
      expect(monthOptions).toStrictEqual([
        { label: "01", value: 1 },
        { label: "02", value: 2 },
        { label: "03", value: 3 },
        { label: "04", value: 4 },
        { label: "05", value: 5 },
        { label: "06", value: 6 },
        { label: "07", value: 7 },
        { label: "08", value: 8 },
        { label: "09", value: 9 },
        { label: "10", value: 10 },
        { label: "11", value: 11 },
        { label: "12", value: 12 },
      ]);
    });
  });

  describe("yearOptions()", () => {
    it("returns selected number of year options", () => {
      expect(yearOptions(2)).toStrictEqual([
        { label: "2022", value: 2022 },
        { label: "2023", value: 2023 },
      ]);
    });

    it("have initial year in `new Date()` full year value`", () => {
      const MOCK_YEAR = 2028;
      jest.useFakeTimers("modern");
      jest.setSystemTime(new Date(MOCK_YEAR, 1, 1));

      expect(yearOptions(2)).toStrictEqual([
        { label: String(MOCK_YEAR), value: MOCK_YEAR },
        { label: String(MOCK_YEAR + 1), value: MOCK_YEAR + 1 },
      ]);

      jest.useRealTimers();
    });
  });
});
