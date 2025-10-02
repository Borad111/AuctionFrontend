import { AuctionDetail, UIAuctionDetail } from "../types";

export const transformAuctionData = (data: AuctionDetail): UIAuctionDetail => {
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    startingPrice: data.startingPrice,
    currentPrice: data.currentBid,
    reservePrice: data.reservePrice,
    status: data.status,
    startTime: data.startTime,
    endTime: data.endTime,
    condition: "Used",
    watchers: Math.floor(Math.random() * 100),
    seller: data.seller.name,
    sellerRating: 4.5,
    location: "Unknown",
    shipping: "Standard Shipping",
    category: data.category,
    images: data.images.map(img => img.url),
    bidHistory: data.bids.map((bid, index) => ({
      id: bid.id,
      username: bid.bidder.name,
      amount: bid.amount,
      timestamp: new Date().toISOString(),
      isWinning: index === 0
    })),
    minimumBid: data.currentBid + 100,
    reserveMet: data.reservePrice ? data.currentBid >= data.reservePrice : true,
    startingBid: data.startingPrice,
  };
};
