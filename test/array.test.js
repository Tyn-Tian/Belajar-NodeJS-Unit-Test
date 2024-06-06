test('array simple', () => {
    const names = ["Chris", "Tian", "Budi"];
    expect(names).toEqual(["Chris", "Tian", "Budi"]);
    expect(names).toContain("Chris");
});

test('array object', () => {
    const persons = [
        {
            name: "Chris"
        },
        {
            name: "Tian"
        }
    ];
    expect(persons).toContainEqual({
        name: "Chris"
    });
});