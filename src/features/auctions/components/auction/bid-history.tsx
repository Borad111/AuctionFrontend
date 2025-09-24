"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"

interface BidHistoryItem {
  id: string
  username: string
  amount: number
  timestamp: string
  isWinning?: boolean
}

interface BidHistoryProps {
  bids: BidHistoryItem[]
  currentBid: number
}

export function BidHistory({ bids, currentBid }: BidHistoryProps) {
  const sortedBids = [...bids].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Bid History</span>
          <Badge variant="secondary">{bids.length} bids</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {sortedBids.length > 0 ? (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {sortedBids.map((bid, index) => (
              <div
                key={bid.id}
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  index === 0 ? "bg-primary/5 border-primary/20" : "bg-muted/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">{bid.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{bid.username}</span>
                      {index === 0 && (
                        <Badge variant="default" className="text-xs">
                          Winning Bid
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(bid.timestamp), { addSuffix: true })}
                    </div>
                  </div>
                </div>
                <div className={`font-bold ${index === 0 ? "text-primary" : "text-foreground"}`}>
                  ${bid.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <p>No bids yet. Be the first to bid!</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
