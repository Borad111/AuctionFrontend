import React from 'react'
import { AuctionBreadcrumbSkeleton } from './AuctionBreadcrumbSkeleton';
import { ImageGallerySkeleton } from './ImageGallerySkeleton';
import { AuctionHeaderSkeleton } from './AuctionHeaderSkeleton';
import { CountdownTimerSkeleton } from './CountdownTimerSkeleton';
import { BiddingFormSkeleton } from './BiddingFormSkeleton';
import { AuctionSellerInfoSkeleton } from './AuctionSellerInfoSkeleton';
import { AuctionTrustIndicatorsSkeleton } from './AuctionTrustIndicatorsSkeleton';
import { AuctionDescriptionSkeleton } from './AuctionDescriptionSkeleton';
import { AuctionDetailsSkeleton } from './AuctionDetailsSkeleton';
import { BidHistorySkeleton } from './BidHistorySkeleton';

function AuctionSkeleton() {
   return (
          <div className="min-h-screen bg-background">
            <div className="container px-4 py-8 mx-auto">
              <AuctionBreadcrumbSkeleton />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
                <div className="lg:col-span-2">
                  <ImageGallerySkeleton />
                </div>
                <div className="space-y-6">
                  <AuctionHeaderSkeleton />
                  <CountdownTimerSkeleton />
                  <BiddingFormSkeleton />
                  <AuctionSellerInfoSkeleton />
                  <AuctionTrustIndicatorsSkeleton />
                </div>
              </div>
  
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                <div className="lg:col-span-2 space-y-8">
                  <AuctionDescriptionSkeleton />
                  <AuctionDetailsSkeleton />
                </div>
                <div>
                  <BidHistorySkeleton />
                </div>
              </div>
            </div>
          </div>
        );
}

export default AuctionSkeleton
