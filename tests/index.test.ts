import mimex from "../src";

describe("MimeX Manager", () => {
    describe("getMimes", () => {
        it("should return the correct MIME(s) for a known extension", () => {
            const result = mimex.getMimes(".webp");
            expect(result).toEqual(["image/webp"]);
        });

        it("should work without leading dot", () => {
            const result = mimex.getMimes("webp");
            expect(result).toEqual(["image/webp"]);
        });

        it("should return undefined for unknown extensions", () => {
            const result = mimex.getMimes(".unknown");
            expect(result).toBeUndefined();
        });
    });

    describe("getExtensions", () => {
        it("should return the correct extension(s) for a known MIME", () => {
            const result = mimex.getExtensions("image/webp");
            expect(result).toEqual([".webp"]);
        });

        it("should return undefined for unknown MIME types", () => {
            const result = mimex.getExtensions("application/unknown");
            expect(result).toBeUndefined();
        });
    });

    describe("mimes property", () => {
        it("should include known MIME types", () => {
            expect(mimex.mimes).toContain("image/webp");
        });

        it("should be readonly", () => {
            expect(() => {
                // @ts-expect-error
                mimex.mimes.push("test/mime");
            }).toThrow();
        });
    });

    describe("extensions property", () => {
        it("should include known extensions", () => {
            expect(mimex.extensions).toContain(".webp");
        });

        it("should be readonly", () => {
            expect(() => {
                // @ts-expect-error
                mimex.extensions.push(".test");
            }).toThrow();
        });
    });

    describe("Validation methods", () => {
        describe("isMime", () => {
            it("should return true for a known MIME type", () => {
                expect(mimex.isMime("image/webp")).toBe(true);
            });

            it("should return false for an unknown MIME type", () => {
                expect(mimex.isMime("application/unknown")).toBe(false);
            });
        });

        describe("isExtension", () => {
            it("should return true for a known extension with leading dot", () => {
                expect(mimex.isExtension(".webp")).toBe(true);
            });

            it("should return true for a known extension without leading dot", () => {
                expect(mimex.isExtension("webp")).toBe(true);
            });

            it("should return false for an unknown extension", () => {
                expect(mimex.isExtension(".unknown")).toBe(false);
            });
        });
    });

});