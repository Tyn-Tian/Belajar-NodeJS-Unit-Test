test('string.not', () => {
    const name = "Christian";

    expect(name).not.toBe("Joko");
    expect(name).not.toEqual("Joko");
    expect(name).not.toMatch(/Joko/);
});

test('number.not', () => {
    const value = 2 + 2;

    expect(value).not.toBeGreaterThanOrEqual(6);
    expect(value).not.toBeLessThan(3);
    expect(value).not.toBe(10);
});