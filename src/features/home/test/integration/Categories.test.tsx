import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useCategories } from '../../hooks/useCategories';
import { useFeaturedAuctions } from '../../hooks/useFeaturedItems';
import HomeContainer from '../../container/HomeContainer';
import { homeApi } from '../../api/homeApi';

// Mock all the hooks and APIs
jest.mock('../hooks/useCategories');
jest.mock('../hooks/useFeaturedAuctions');
jest.mock('../api/homeApi');

// Mock child components with proper implementations
jest.mock('../components/ui/CategoryCard', () => ({
  CategoryCard: ({ name, auctionCount }: { name: string; auctionCount: string }) => (
    <div data-testid="category-card">
      <h3>{name}</h3>
      <p>{auctionCount} auctiygons</p>
    </div>
  )
}));

jest.mock('../components/ui/CategoriesSkeleton', () => () => (
  <div data-testid="categories-skeleton">Loading categories...</div>
));

jest.mock('@/components/ui/StateHandler', () => ({
  StateHandler: ({ loading, error, loadingFallback, children }: any) => {
    if (loading) return loadingFallback;
    if (error) return <div data-testid="error-state">{error}</div>;
    return <div data-testid="success-state">{children}</div>;
  }
}));

jest.mock('@/components/ui/SectionBoundary', () => ({
  SectionBoundary: ({ children, message }: any) => (
    <div data-testid="section-boundary" data-message={message}>
      {children}
    </div>
  )
}));

const mockCategories = [
  {
    id: '1',
    name: 'Electronics',
    icon: 'Smartphone',
    auctionCount: '25'
  },
  {
    id: '2',
    name: 'Cars', 
    icon: 'Car',
    auctionCount: '15'
  }
];

const mockFeaturedAuctions = [
  {
    id: '1',
    title: 'iPhone 13',
    currentBid: 500,
    endDate: '2023-12-31'
  }
];

describe('Home Flow Integration Test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    (useCategories as jest.Mock).mockReturnValue({
      categories: mockCategories,
      loading: false,
      error: null
    });

    (useFeaturedAuctions as jest.Mock).mockReturnValue({
      featuredAuctions: mockFeaturedAuctions,
      loading: false,
      error: null
    });
  });

  it('should render complete home flow with categories and featured auctions', () => {
    render(<HomeContainer />);

    // Verify categories section is rendered
    expect(screen.getByText('Browse Categories')).toBeInTheDocument();
    
    // Verify categories are rendered through the complete flow
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('Cars')).toBeInTheDocument();
    expect(screen.getByText('25 auctions')).toBeInTheDocument();
    expect(screen.getByText('15 auctions')).toBeInTheDocument();

    // Verify section boundary is working
    expect(screen.getByTestId('section-boundary')).toBeInTheDocument();
  });

  it('should handle loading state in the complete flow', () => {
    (useCategories as jest.Mock).mockReturnValue({
      categories: [],
      loading: true,
      error: null
    });

    render(<HomeContainer />);

    // Verify loading state is handled through the complete flow
    expect(screen.getByTestId('categories-skeleton')).toBeInTheDocument();
    expect(screen.queryByText('Electronics')).not.toBeInTheDocument();
  });

  it('should handle error state in the complete flow', () => {
    const errorMessage = 'Failed to load categories';
    
    (useCategories as jest.Mock).mockReturnValue({
      categories: [],
      loading: false,
      error: errorMessage
    });

            (<HomeContainer />);

    // Verify error state is handled through the complete flow
    expect(screen.getByTestId('error-state')).toHaveTextContent(errorMessage);
    expect(screen.queryByText('Electronics')).not.toBeInTheDocument();
  });

  it('shmould handle empty categories state', () => {
    (useCategories as jest.Mock).mockReturnValue({
      categories: [],
      loading: false,
      error: null
    });

    render(<HomeContainer />);

    // Section should still render but with no categories
    expect(screen.getByText('Browse Categories')).toBeInTheDocument();
    expect(screen.queryByTestId('category-card')).not.toBeInTheDocument();
  });

  it('should handle API error in useCategories hook', () => {
    // Mock API error
    const apiError = { status: 500, data: { message: 'Server error' } };
    
    (homeApi.useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      isFetching: false,
      error: apiError
    });

    // Mock error handling functions
    const { mapApiErrorToMessage, handleError } = require('@/utils/error/errorHandler');
    mapApiErrorToMessage.mockReturnValue('Failed to load categories');
    handleError.mockImplementation(() => {
      throw new Error('Test error');
    });

    // Re-mock useCategories to use the API error
    (useCategories as jest.Mock).mockReturnValue({
      categories: [],
      loading: false,
      error: 'Failed to load categories'
    });

    render(<HomeContainer />);

    // Verify error is handled through the complete flow
    expect(screen.getByTestId('error-state')).toHaveTextContent('Failed to load categories');
    expect(handleError).toHaveBeenCalledWith(apiError, { section: 'categories' }, false);
  });
}); 