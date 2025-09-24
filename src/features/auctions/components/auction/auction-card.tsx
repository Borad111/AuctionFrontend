import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye } from "lucide-react"
import Image from "next/image"

interface AuctionCardProps {
  id: string
  title: string
  currentBid: number
  timeLeft: string
  imageUrl: string
  category: string
  watchers: number
  status: "active" | "ending-soon" | "ended"
}

export function AuctionCard({
  id,
  title,
  currentBid,
  timeLeft,
  imageUrl,
  category,
  watchers,
  status,               
}: AuctionCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary text-primary-foreground"
      case "ending-soon":
        return "bg-destructive text-destructive-foreground"
      case "ended":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-primary text-primary-foreground"
    }
  }

  return (
   <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
   
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className={`absolute top-2 right-2 ${getStatusColor(status)}`}>
          {status === "ending-soon" ? "Ending Soon" : status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <h3 className="font-semibold text-lg line-clamp-2 text-balance">{title}</h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{timeLeft}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{watchers}</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Current Bid</p>
            <p className="text-2xl font-bold text-primary">${currentBid.toLocaleString()}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" disabled={status === "ended"}>
          {status === "ended" ? "Auction Ended" : "Bid Now"}
        </Button>
      </CardFooter>
    </Card>
  )
}
 