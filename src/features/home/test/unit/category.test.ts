import { z } from 'zod';
import { CategoriesResponseSchema, CategorySchema } from '../../schema/categories';

describe('CategorySchema', () => {
  it('should validate a correct category', () => {
    const validCategory = {
      id: '1',
      name: 'Electronics',
      icon: null,
      auctionCount: '10',
    };
    expect(() => CategorySchema.parse(validCategory)).not.toThrow();
  });

  it('should throw for invalid category', () => {
    const invalidCategory = {
      id: 1, // id should be string
      name: 'Electronics',
      icon: null,
      auctionCount: '10',
    };
    expect(() => CategorySchema.parse(invalidCategory)).toThrow(z.ZodError);
  });

  it('should validate CategoriesResponse', () => {
    const response = {
      success: true,
      message: 'ok',
      categories: [
        { id: '1', name: 'Electronics', icon: null, auctionCount: '5' },
      ],
    };
    expect(() => CategoriesResponseSchema.parse(response)).not.toThrow();
  });
});
