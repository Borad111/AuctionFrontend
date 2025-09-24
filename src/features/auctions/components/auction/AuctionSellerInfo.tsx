"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Truck } from "lucide-react"

export function AuctionSellerInfo({ seller, rating, location, shipping }: {
  seller: string
  rating: number
  location: string
  shipping: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Seller Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Seller</span>
          <span className="font-medium">{seller}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Rating</span>
          <div className="flex items-center gap-1">
            <span className="font-medium">{rating}</span>
            <span className="text-yellow-500">★★★★★</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Location</span>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Shipping</span>
          <div className="flex items-center gap-1">
            <Truck className="h-3 w-3" />
            <span className="text-sm">{shipping}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
