test('test toBe', () => {
    const name = "Christian";
    const hello = `Hello ${name}`;

    expect(hello).toBe("Hello Christian");
});

test('test toEqual', () => {
    let person = { id: "Tian" };
    Object.assign(person, { name: "Christian" });

    expect(person).toEqual({ id: "Tian", name: "Christian" });
});