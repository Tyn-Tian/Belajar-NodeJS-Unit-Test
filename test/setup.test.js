import { sum } from "../src/sum";

beforeAll(() => {
    console.log("Before All");
});

afterAll(() => {
    console.log("After All");
});

beforeEach(() => {
    console.log("Before Each");
});

afterEach(() => {
    console.log("After Each");
})

test('first test', () => {
    expect(sum(10, 10)).toBe(20);
    console.log("First Test");
});

test('second test', () => {
    expect(sum(10, 10)).toBe(20);
    console.log("Second Test");
});