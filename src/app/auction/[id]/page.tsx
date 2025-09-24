"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Share2, Flag, Eye, MapPin, Truck, Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ImageGallery } from "@/features/auctions/components/auction/image-gallery"
import { CountdownTimer } from "@/features/auctions/components/auction/countdown-timer"
import { BidHistory } from "@/features/auctions/components/auction/bid-history"
import { BiddingForm } from "@/features/auctions/components/auction/bidding-form"
import { AuctionCard } from "@/features/auctions/components/auction/auction-card"
import { AuctionContainer } from "@/features/auctions/container/AuctionContainer"

export default function AuctionDetailPage({ params }: { params: { id: string } }) {

  // Mock auction data - in a real app, this would be fetched based on params.id
  const auction = {
    id: params.id,
    title: "Vintage Rolex Submariner 1960s - Rare Collectible Watch",
    description: `This exceptional vintage Rolex Submariner from the 1960s represents one of the most sought-after timepieces in horological history. 

    Features:
    • Original dial and hands in excellent condition
    • Automatic movement serviced and running perfectly
    • Stainless steel case with minimal wear
    • Original Rolex crown and crystal
    • Water resistance tested and certified
    • Comes with original box and papers
    • Certificate of authenticity included

    This particular model is highly coveted by collectors due to its pristine condition and complete documentation. The watch has been carefully maintained and shows minimal signs of wear consistent with its age.

    Condition: Excellent (9/10)
    Case Size: 40mm
    Movement: Automatic
    Water Resistance: 200m
    Year: 1965-1967`,
    currentBid: 15750,
    minimumBid: 16000,
    reservePrice: 18000,
    reserveMet: false,
    startingBid: 12000,
    category: "Jewelry",
    condition: "Excellent",
    seller: "WatchCollector_Pro",
    sellerRating: 4.9,
    location: "New York, NY",
    shipping: "Free worldwide shipping",
    endTime: "2024-12-15T18:00:00Z",
    status: "active" as const,
    watchers: 47,
    images: [
      "https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-longines-spirit-zulu-time-1925-l3-803-5-53-6-1746639103-thumbnail.png?w=2560",
      "https://www.maximawatches.com/cdn/shop/files/69391LMGB-A.jpg?v=1719559429",
      "https://www.maximawatches.com/cdn/shop/files/69392LMGB-A.jpg?v=1719559103",
      "https://www.maximawatches.com/cdn/shop/files/69823LMGB1.jpg?v=1719570009",
      "https://www.maximawatches.com/cdn/shop/files/70103PMLB1.jpg?v=1722681803",
    ],
    bidHistory: [
      {
        id: "1",
        username: "TimeCollector88",
        amount: 15750,
        timestamp: "2024-12-10T14:30:00Z",
        isWinning: true,
      },
      {
        id: "2",
        username: "VintageWatchFan",
        amount: 15500,
        timestamp: "2024-12-10T14:15:00Z",
      },
      {
        id: "3",
        username: "HorologyExpert",
        amount: 15250,
        timestamp: "2024-12-10T13:45:00Z",
      },
      {
        id: "4",
        username: "WatchEnthusiast",
        amount: 15000,
        timestamp: "2024-12-10T13:20:00Z",
      },
      {
        id: "5",
        username: "CollectorPrime",
        amount: 14750,
        timestamp: "2024-12-10T12:55:00Z",
      },
    ],
  }

  const relatedAuctions = [
    {
      id: "2",
      title: "Omega Speedmaster Professional",
      currentBid: 3250,
      timeLeft: "1d 12h 30m",
      imageUrl: "https://tiimg.tistatic.com/fp/1/007/574/vivo-mobile-phone-7-38mm-ultra-smooth-body-170g-light-2-5d-adjusted-outline-for-a-great-hold-703.jpg",
      category: "Jewelry",
      watchers: 23,
      status: "active" as const,
    },
    {
      id: "3",
      title: "Patek Philippe Calatrava",
      currentBid: 28500,
      timeLeft: "3d 8h 15m",
      imageUrl: "https://m.media-amazon.com/images/I/61zwK7mmLtL.jpg",
      category: "Jewelry",
      watchers: 89,
      status: "active" as const,
    },
    {
      id: "4",
      title: "Tudor Black Bay Heritage",
      currentBid: 2150,
      timeLeft: "5d 14h 45m",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rMA7FOwUk3yHzzWh5ROtKa4BXzuIzTSVtA&s",
      category: "Jewelry",
      watchers: 34,
      status: "active" as const,
    },
  ]



  return (
    <AuctionContainer auction={auction} relatedAuctions={relatedAuctions} />
  )
}
