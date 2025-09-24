"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AuctionDetails({ startingBid, currentBid, reservePrice, reserveMet, totalBids }: {
  startingBid: number
  currentBid: number
  reservePrice: number
  reserveMet: boolean
  totalBids: number
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Auction Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Starting Bid</span>
            <span>${startingBid.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Current Bid</span>
            <span className="font-semibold">${currentBid.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Reserve Price</span>
            <span>{reserveMet ? "Met" : `$${reservePrice.toLocaleString()}`}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Bids</span>
            <span>{totalBids}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
