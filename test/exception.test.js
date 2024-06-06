import { MyException, callMe } from "../src/exception";

test('exception', () => {
    expect(() => callMe("Christian")).toThrow();
    expect(() => callMe("Christian")).toThrow(MyException);
    expect(() => callMe("Christian")).toThrow("Ups my exceptions happens");
});

test('exception not happens', () => {
    expect(callMe("Budi")).toBe("OK");
});