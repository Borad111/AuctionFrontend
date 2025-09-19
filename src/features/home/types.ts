export interface AuctionImage {
  id: string;
  imageUrl: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Auction {
  id: string;
  title: string;
  description: string;
  startingPrice: number;
  currentPrice: number;
  status: "ACTIVE" | "ENDED" | "CANCELLED";
  startTime: string;
  endTime: string;
  sellerId: string;
  categoryId?: string;
  createdAt?: string;
  updatedA?: string;
  images: AuctionImage[]; 
  category:AuctionCategory ;
}

export interface AuctionCategory {
  id: string;
  name: string;
  icon: string | null;
} 
export interface FeaturedResponse {
  success: boolean;
  message: string;
  auctions: Auction[];
}

export interface FeaturedAuctionsProps {
  auctions: Auction[];
  loading: boolean;
  error: string | null;
}

export interface AuctionCardProps {
  auction: Auction;
}

export interface Category {
  id: string;
  name: string;
  icon: string | null;
  auctionCount: string; // number me convert kar lo RTK query me
}

export interface CategoriesResponse {
  success: boolean;
  message: string;
  categories: Category[];
}

export interface UseCategoriesReturn {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

export interface CategoriesProps {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

export interface CategoryCardProps {
  id: string
  name: string
  icon: string         
  auctionCount: string 
}