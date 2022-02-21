import cn from "../classnames";

describe("utils/classnames.ts", () => {
  describe("cn()", () => {
    it("joins string classnames", () => {
      const className = cn(["Kikis", "delivery", "service"]);
      expect(className).toBe("Kikis delivery service");
    });

    it("filters falsy classnames", () => {
      const className = cn([
        "Kikis",
        false,
        null,
        undefined,
        "delivery",
        "service",
      ]);
      expect(className).toBe("Kikis delivery service");
    });
  });
});
