import { CategoriesResponseSchema } from "../../schema/categories";

describe("transformResponse", () => {
  it("should parse valid response", () => {
    const response = {
      success: true,
      message: "ok",
      categories: [
        { id: "1", name: "Electronics", icon: "phone", auctionCount: "10" }
      ]
    };

    expect(() => CategoriesResponseSchema.parse(response)).not.toThrow();
  });

  it("should throw error for invalid response", () => {
    const response = {
      success: true,
      message: "ok",
      categories: [
        { id: "1", name: "Electronics" } // ❌ missing fields
      ]
    };

    expect(() => CategoriesResponseSchema.parse(response)).toThrow();
  });
});
