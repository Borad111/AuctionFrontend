"use client"
import { AuctionContainer } from "@/features/auctions/container/AuctionContainer"
import React from "react";


export default function AuctionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // unwrap params
  const { id: auctionId } = React.use(params);


  return (
    <AuctionContainer auctionId={auctionId} />
    // <AuctionContainer auction={auction} relatedAuctions={relatedAuctions} />
    // <div>
    //   <h1>Auction ID: {auctionId}</h1>
    // </div>
  )
}
