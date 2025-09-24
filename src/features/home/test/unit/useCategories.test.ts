// src/hooks/__tests__/useCategories.test.ts
import { renderHook, waitFor } from '@testing-library/react';
import { mapApiErrorToMessage, handleError } from '@/utils/error/errorHandler';
import { homeApi } from '../../api/homeApi';
import { useCategories } from '../../hooks/useCategories';

// Mock dependencies
jest.mock('../../api/homeApi');
jest.mock('@/utils/error/errorHandler');

const mockCategories = [
  {
    id: '1',
    name: 'Electronics',
    icon: 'smartphone',
    auctionCount: '25'
  },
  {
    id: '2', 
    name: 'Cars',
    icon: 'car',
    auctionCount: '15'
  }
];

describe('useCategories Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return categories data on successful API call', () => {
    // Mock successful API response
    (homeApi.useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: { categories: mockCategories },
      isLoading: false,
      isFetching: false,
      error: null
    });

    const { result } = renderHook(() => useCategories());

    expect(result.current.categories).toEqual(mockCategories);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(homeApi.useGetCategoriesQuery).toHaveBeenCalled();
  });

  it('should handle loading state correctly', () => {
    // Mock loading state
    (homeApi.useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      isFetching: true,
      error: null
    });

    const { result } = renderHook(() => useCategories());

    expect(result.current.loading).toBe(true);
    expect(result.current.categories).toEqual([]);
    expect(result.current.error).toBeNull();
  });

  it('should handle API errors correctly', () => {
    const mockError = { status: 500, data: { message: 'Server Error' } };
    
    // Mock error state
    (homeApi.useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      isFetching: false,
      error: mockError
    });

    // Mock error handling functions
    (mapApiErrorToMessage as jest.Mock).mockReturnValue('Failed to load categories');


    const { result } = renderHook(() => useCategories());

    expect(result.current.categories).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe('Failed to load categories');
    expect(mapApiErrorToMessage).toHaveBeenCalledWith(mockError);
    expect(handleError).toHaveBeenCalledWith(
      mockError,
      { section: 'categories' },
      false
    );
  });

  it('should handle empty categories response', () => {
    (homeApi.useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: { categories: [] },
      isLoading: false,
      isFetching: false,
      error: null
    });

    const { result } = renderHook(() => useCategories());

    expect(result.current.categories).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should handle undefined data response', () => {
    (homeApi.useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      isFetching: false,
      error: null
    });

    const { result } = renderHook(() => useCategories());

    expect(result.current.categories).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });
});