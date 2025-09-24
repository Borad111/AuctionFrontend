"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AuctionCard } from "@/features/auctions/components/auction/auction-card"

export function AuctionRelated({ relatedAuctions }: { relatedAuctions: any[] }) {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Related Auctions</h2>
        <Button variant="outline" asChild>
          <Link href="/auctions?category=Jewelry">View All Watches</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedAuctions.map((auction) => (
          <AuctionCard key={auction.id} {...auction} />
        ))}
      </div>
    </div>
  )
}
