export interface AuctionDetailResponse {
  success: boolean;
  message: string;
  auction: AuctionDetail;
}

export interface AuctionDetail {
  id: string;
  title: string;
  description: string;
  startingPrice: number;
  reservePrice: number | null;
  currentBid: number;
  status: "ACTIVE" | "ENDED" | "CANCELLED";
  startTime: string;
  endTime: string;
  seller: {
    id: string;
    name: string;
    email: string;
  };
  category: {
    id: string;
    name: string;
  };
  images: Array<{
    id: string;
    url: string;
  }>;
  bids: Array<{
    id: string;
    amount: number;
    bidder: {
      id: string;
      name: string;
    };
  }>;
} 


export interface UIAuctionDetail {
  id: string;
  title: string;
  description: string;
  startingPrice: number;
  currentPrice: number;
  reservePrice: number | null;
  status: "ACTIVE" | "ENDED" | "CANCELLED";
  startTime: string;
  endTime: string;
  condition: string; // Default add karo
  watchers: number; // Default add karo
  seller: string;
  sellerRating: number; // Default add karo
  location: string; // Default add karo
  shipping: string; // Default add karo
  category: {
    id: string;
    name: string;
  };
  images: string[];
  bidHistory: Array<{
    id: string;
    username: string;
    amount: number;
    timestamp: string;
    isWinning?: boolean;
  }>;
  minimumBid: number;
  reserveMet: boolean;
  startingBid: number;
}  


export interface AuctionContainerProps {
  auctionId: string;
}


export interface useAuctionDetailReturn {
    auction: UIAuctionDetail | null;
    loading: boolean;
    error: string | null;
    }