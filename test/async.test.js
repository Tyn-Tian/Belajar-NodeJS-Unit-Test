import { sayHelloAsync } from "../src/async";

test('test async function', async () => {
    const result = await sayHelloAsync("Christian");
    expect(result).toBe("Hello Christian");
});

test('test async matchers', async () => {
    await expect(sayHelloAsync("Christian")).resolves.toBe("Hello Christian");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});