describe("Bug", () => {
    it("toMatch validation unexpected behavior", () => {
        const str = "Element text on Interface20000";
        expect(str).toMatch(/Element text on Interface200/);//should not pass the assertion
    });

    it("toMatch validation unexpected behavior-II", () => {
        const str = "Total:21245";
        expect(str).toMatch(/Total:212/);//should not pass the assertion
    });


});