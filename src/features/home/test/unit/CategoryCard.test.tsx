import React from "react";
import { render, screen } from "@testing-library/react";
import Categories from "../../components/home/Categories";

// Mock CategoryCard to simplify testing
jest.mock("../../components/ui/CategoryCard", () => ({
  CategoryCard: ({ name }: any) => <div data-testid="category">{name}</div>,
}));

// Mock CategoriesSkeleton
jest.mock("../../components/ui/CategoriesSkeleton", () => () => (
  <div>Loading...</div>
));

describe("Categories component", () => {
  const mockCategories = [
    { id: "1", name: "Electronics", icon: "Smartphone", auctionCount: "10" },
    { id: "2", name: "Books", icon: null, auctionCount: "5" },
  ];

  it("renders categories correctly", () => {
    render(<Categories categories={mockCategories} loading={false} error={null} />);
    
    const items = screen.getAllByTestId("category");
    expect(items).toHaveLength(2);
    expect(screen.getByText("Electronics")).toBeInTheDocument();
    expect(screen.getByText("Books")).toBeInTheDocument();
  });

  it("shows loading fallback when loading", () => {
    render(<Categories categories={[]} loading={true} error={null} />);
    
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("shows error message when error occurs", () => {
    render(<Categories categories={[]} loading={false} error="Failed to load categories" />);
    
    expect(screen.getByText("Failed to load categories")).toBeInTheDocument();
  });

  it("handles empty categories array", () => {
    render(<Categories categories={[]} loading={false} error={null} />);
    
    // No category cards should render
    expect(screen.queryByTestId("category")).toBeNull();
  });
});
