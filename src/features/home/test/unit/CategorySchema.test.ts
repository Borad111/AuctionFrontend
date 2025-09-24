// src/types/CategorySchema.test.ts

import { CategorySchema } from "../../schema/categories";

describe("CategorySchema", () => {
  it("should validate correct category data", () => {
    const validCategory = {
      id: "1",
      name: "Electronics",
      icon: "smartphone",
      auctionCount: "25",
    };

    expect(() => CategorySchema.parse(validCategory)).not.toThrow();
  });

  it("should reject invalid category data", () => {
    const invalidCategory = {
      id: "1",
      name: "Electronics",
      // missing icon and auctionCount
    };

    expect(() => CategorySchema.parse(invalidCategory)).toThrow();
  });

  it("should reject category with wrong datatype", () => {
    const wrongTypeCategory = {
      id: "1",
      name: "Electronics",
      icon: "smartphone",
      auctionCount: 25, // ❌ number diya, string expected hai
    };

    expect(() => CategorySchema.parse(wrongTypeCategory)).toThrow();
  });
  it("should accept null for icon field", () => {
    const categoryWithNullIcon = {
      id: "2",
      name: "Fashion",
      icon: null, // ✅ null allowed hai
      auctionCount: "10",
    };

    expect(() => CategorySchema.parse(categoryWithNullIcon)).not.toThrow();
  });
  it("should ignore extra fields", () => {
    const categoryWithExtra = {
      id: "3",
      name: "Books",
      icon: "book",
      auctionCount: "5",
      extraField: "extra", // ❌ schema me nahi hai
    };

    expect(() => CategorySchema.parse(categoryWithExtra)).toThrow();
  });
});
