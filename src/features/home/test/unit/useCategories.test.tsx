import { renderHook } from "@testing-library/react";
import { useCategories } from "../../hooks/useCategories";
import { homeApi } from "../../api/homeApi";
import { mapApiErrorToMessage } from "@/utils/error/errorHandler";

// mock api hook
jest.mock("../../api/homeApi", () => ({
  homeApi: {
    useGetCategoriesQuery: jest.fn(),
  },
}));

// mock error mapper
jest.mock("@/utils/error/errorHandler", () => ({
  mapApiErrorToMessage: jest.fn(() => "Mocked error"),
  handleError: jest.fn(),
}));

describe("useCategories hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return categories when API succeeds", () => {
    (homeApi.useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: { categories: ["Electronics", "Furniture"] },
      error: null,
      isLoading: false,
      isFetching: false,
    });

    const { result } = renderHook(() => useCategories());

    expect(result.current.categories).toEqual(["Electronics", "Furniture"]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("should return loading state", () => {
    (homeApi.useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: null,
      isLoading: true,
      isFetching: true,
    });

    const { result } = renderHook(() => useCategories());

    expect(result.current.loading).toBe(true);
    expect(result.current.categories).toEqual([]);
    expect(result.current.error).toBeNull();
  });

  it("should return error message when API fails", () => {
    const fakeError = { status: 500, data: { message: "Internal error" } };

    (homeApi.useGetCategoriesQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: fakeError,
      isLoading: false,
      isFetching: false,
    });

    const { result } = renderHook(() => useCategories());

    expect(mapApiErrorToMessage).toHaveBeenCalledWith(fakeError);
    expect(result.current.error).toBe("Mocked error");
    expect(result.current.categories).toEqual([]);
    expect(result.current.loading).toBe(false);
  });
});
