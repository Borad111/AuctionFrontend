"use client"
import { useState } from "react"
import { Heart, Share2, Flag, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function AuctionHeader({ title, condition, status, watchers }: {
  title: string
  condition: string
  status: "ACTIVE" | "ENDED" | "CANCELLED"
  watchers: number
}) {
  const [isWatching, setIsWatching] = useState(false)

  return (
    <div>
      <div className="flex items-start justify-between mb-2">
        <h1 className="text-2xl font-bold text-balance">{title}</h1>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsWatching(!isWatching)}
            className={isWatching ? "text-red-500 border-red-200" : ""}
          >
            <Heart className={`h-4 w-4 ${isWatching ? "fill-current" : ""}`} />
          </Button>
          <Button variant="outline" size="icon"><Share2 className="h-4 w-4" /></Button>
          <Button variant="outline" size="icon"><Flag className="h-4 w-4" /></Button>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Eye className="h-4 w-4" />
          <span>{watchers} watching</span>
        </div>
        <Badge variant="secondary">{condition}</Badge>
        <Badge variant={status === "ACTIVE" ? "default" : "secondary"}>
          {status === "ACTIVE" ? "Active" : "Ended"}
        </Badge>
      </div>
    </div>
  )
}
