test('string', () => {
    const name = "Christian";

    expect(name).toBe("Christian");
    expect(name).toEqual("Christian");
    expect(name).toMatch(/tian/);
});