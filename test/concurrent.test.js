import {sayHelloAsync} from '../src/async';

test('concurrent 1', async () => {
    await expect(sayHelloAsync("Tian")).resolves.toBe("Hello Tian");
});

test('concurrent 2', async () => {
    await expect(sayHelloAsync("Tian")).resolves.toBe("Hello Tian");
});

test('concurrent 3', async () => {
    await expect(sayHelloAsync("Tian")).resolves.toBe("Hello Tian");
});