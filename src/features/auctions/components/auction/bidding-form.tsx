"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Gavel, TrendingUp, AlertTriangle } from "lucide-react"

interface BiddingFormProps {
  currentBid: number
  minimumBid: number
  reservePrice?: number
  reserveMet: boolean
  auctionStatus: "active" | "ending-soon" | "ended"
  onPlaceBid: (amount: number) => void
}

export function BiddingForm({
  currentBid,
  minimumBid,
  reservePrice,
  reserveMet,
  auctionStatus,
  onPlaceBid,
}: BiddingFormProps) {
  const [bidAmount, setBidAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const suggestedBids = [minimumBid, minimumBid + 50, minimumBid + 100, minimumBid + 250]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const amount = Number.parseFloat(bidAmount)

    if (amount < minimumBid) {
      return
    }

    setIsSubmitting(true)
    try {
      await onPlaceBid(amount)
      setBidAmount("")
    } catch (error) {
      console.error("Failed to place bid:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isValidBid = bidAmount && Number.parseFloat(bidAmount) >= minimumBid
  const isAuctionActive = auctionStatus !== "ended"

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gavel className="h-5 w-5 text-primary" />
          Place Your Bid
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Bid Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Current Bid</span>
            <span className="text-2xl font-bold text-primary">${currentBid.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Minimum Bid</span>
            <span className="font-semibold">${minimumBid.toLocaleString()}</span>
          </div>

          {reservePrice && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Reserve Price</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">
                  {reserveMet ? "Reserve Met" : `$${reservePrice.toLocaleString()}`}
                </span>
                <Badge variant={reserveMet ? "default" : "secondary"}>{reserveMet ? "Met" : "Not Met"}</Badge>
              </div>
            </div>
          )}
        </div>

        {/* Reserve Alert */}
        {reservePrice && !reserveMet && (
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              This auction has a reserve price of ${reservePrice.toLocaleString()}. The seller is not obligated to sell
              unless the reserve is met.
            </AlertDescription>
          </Alert>
        )}

        {/* Bidding Form */}
        {isAuctionActive ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="bidAmount">Your Bid Amount</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="bidAmount"
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder={minimumBid.toString()}
                  min={minimumBid}
                  step="1"
                  className="pl-8"
                />
              </div>
              {bidAmount && Number.parseFloat(bidAmount) < minimumBid && (
                <p className="text-sm text-destructive mt-1">Bid must be at least ${minimumBid.toLocaleString()}</p>
              )}
            </div>

            {/* Quick Bid Buttons */}
            <div>
              <Label className="text-sm text-muted-foreground">Quick Bid</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {suggestedBids.map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setBidAmount(amount.toString())}
                  >
                    ${amount.toLocaleString()}
                  </Button>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={!isValidBid || isSubmitting}>
              {isSubmitting ? "Placing Bid..." : "Place Bid"}
              <TrendingUp className="ml-2 h-4 w-4" />
            </Button>
          </form>
        ) : (
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-4">This auction has ended</p>
            <Button disabled className="w-full" size="lg">
              Auction Ended
            </Button>
          </div>
        )}

        {/* Bidding Tips */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p>• Bids are binding and cannot be retracted</p>
          <p>• You will be notified if you are outbid</p>
          <p>• Winning bidders have 48 hours to complete payment</p>
        </div>
      </CardContent>
    </Card>
  )
}
