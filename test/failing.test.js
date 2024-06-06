import { sayHello } from "../src/sayHello";

test('sayHello Success', () => {
    expect(sayHello("Tian")).toBe("Hello Tian");
});

test.failing('sayHello error', () => {
    sayHello(null);
});

test('sayHello error matchers', () => {
    expect(() => {
        sayHello(null);
    }).toThrow();
});