import { validateEmail } from "../src/validateEmail";


// if the email if empty => error
describe("validateEmail", () => {
    test("valid email should return true", () => {
        expect(validateEmail("john.doe@example.com")).toBe(true);
    });
// an email should contain '@'
    test("missing @ should return false", () => {
        expect(validateEmail("johndoeexample.com")).toBe(false);
    });
// an email without domain is not valid 
    test("missing domain should return false", () => {
        expect(validateEmail("john@")).toBe(false);
    });
// checking an imagiery main 
    test("missing user should return false", () => {
        expect(validateEmail("@example.com")).toBe(false);
    });
// no '.'
    test("domain without dot should return false", () => {
        expect(validateEmail("john@examplecom")).toBe(false);
    });

    test("dot at end of domain should return false", () => {
        expect(validateEmail("john@example.com.")).toBe(false);
    });

    test("email with spaces should return false", () => {
        expect(validateEmail("john doe@example.com")).toBe(false);
    });
});
