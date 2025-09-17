'use client';

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuctionCard } from "@/features/home/components/ui/AuctionCard";
import {  FeaturedAuctionsProps } from "../../types";
import FeaturedAuctionsSkeleton from "../ui/FeaturedAuctionsSkeleton";
import { StateHandler } from "@/components/ui/StateHandler";


export default function FeaturedAuctions({ 
  auctions, 
  loading, 
  error 
}: FeaturedAuctionsProps) {
  
  return (
    <StateHandler loading={loading} error={error} loadingFallback={<FeaturedAuctionsSkeleton />}>

    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Auctions</h2>
            <p className="text-muted-foreground">Don't miss these premium items ending soon</p>
          </div>
          <Button variant="outline" asChild>
            <a href="/auctions">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

      { auctions?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No featured auctions available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {auctions?.map((auction) => (
              <AuctionCard 
                key={auction.id} 
                auction={auction}
              />
            ))}
          </div>
        )}
      </div>
    </section>

    </StateHandler>

  );
}