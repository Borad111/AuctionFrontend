import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Hero() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
            Bid Smarter, <span className="text-primary">Win Bigger!</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Discover unique treasures, rare collectibles, and exclusive items in
            our premium online auction marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 !bg-primary !text-primary-foreground !opacity-100 relative z-10"
              asChild
            >
              <Link href="/auctions">
                Start Bidding
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-background/80 backdrop-blur-sm border-2 !hover:bg-background/80 !hover:text-current !hover:opacity-100"
              asChild
            >
              <Link href="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

