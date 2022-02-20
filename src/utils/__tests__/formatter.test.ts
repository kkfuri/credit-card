import {
  creditCardInputMask,
  creditCardMask,
  cvvMask,
  nameMask,
} from "../formatter";

describe("utils/formatter.ts", () => {
  describe("creditCardInputMask()", () => {
    it("should split when card have more than 16 numbers", () => {
      const result = creditCardInputMask("1234 1234 1234 1234 4321");
      expect(result).toBe("1234 1234 1234 1234");
    });

    it("should format card to add a space at every 4 characters", () => {
      const result = creditCardInputMask("4444444444444444");
      expect(result).toBe("4444 4444 4444 4444");
    });

    it("should not allow letters", () => {
      const result = creditCardInputMask("aaaaaaaa");
      expect(result).toBe("");
    });
  });

  describe("cvvMask()", () => {
    it("should split when cvv have more than 4 numbers", () => {
      const result = cvvMask("12345");
      expect(result).toBe("1234");
    });
  });

  describe("creditCardMask()", () => {
    it("should replace middle groups to *", () => {
      const result = creditCardMask("1234 1234 1234 4321");
      expect(result).toBe("1234 **** **** 4321");
    });

    it("should have a pad end to fill all characters with #", () => {
      const result = creditCardMask("44");
      expect(result).toBe("44## #### #### ####");
    });

    it("should have middle groups mask with * and pad end with #", () => {
      const result = creditCardMask("1234 56");
      expect(result).toBe("1234 **## #### ####");
    });
  });

  describe("nameMask()", () => {
    it("should display full name when it does not pass the limit", () => {
      const result = nameMask("Chihiro Ogino");
      expect(result).toBe("Chihiro Ogino");
    });

    it("should add ... at the end of long names", () => {
      const result = nameMask("Anakin Skywalker Fett Ren");
      expect(result).toBe("Anakin Skywalker ...");
    });
  });
});
