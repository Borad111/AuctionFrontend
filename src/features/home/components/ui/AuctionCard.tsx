"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye } from "lucide-react";
import Image from "next/image";
import {  AuctionCardProps } from "@/features/home/types";
import { calculateTimeLeft, formatCurrency } from "@/utils/utils";
import { getStatusInfo } from "@/utils/auction";

export function AuctionCard({ auction }: AuctionCardProps) {

  const imageUrl = auction?.images?.[0]?.imageUrl || "/placeholder-auction.jpg";

  const formattedPrice = formatCurrency(auction.currentPrice);

  const timeLeft = calculateTimeLeft(new Date(auction.endTime));

  const statusInfo = getStatusInfo(auction.status);

  const categoryName = auction.category?.name || "Uncategorized";
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden rounded-lg p-0 border-0">
      <div className="relative h-96 w-full overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={auction.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className={`absolute top-2 right-2 z-10 ${statusInfo.color}`}>
          {statusInfo.text}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            {categoryName}
          </Badge>
          <h3 className="font-semibold text-lg line-clamp-2 text-balance">
            {auction.title}
          </h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{timeLeft}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>0</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Current Price</p>
            <p className="text-2xl font-bold text-primary">{formattedPrice}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" disabled={auction.status !== "ACTIVE"}>
          {auction.status !== "ACTIVE" ? "Auction Ended" : "Bid Now"}
        </Button>
      </CardFooter>
    </Card>
  );
}
