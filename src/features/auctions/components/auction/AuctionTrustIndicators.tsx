"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

export function AuctionTrustIndicators() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>Buyer Protection</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>Secure Payment</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
